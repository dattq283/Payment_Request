# Hệ thống quản lý Đề nghị thanh toán — Backend API

API cho quy trình tạo, duyệt và thanh toán đề nghị thanh toán nội bộ: người tạo lập đề nghị, người duyệt xét duyệt, kế toán xử lý và chuyển tiền.

## Công nghệ

NestJS 12 · Prisma 7.10 · MySQL 8 · TypeScript 6 · JWT · Jest

## Yêu cầu môi trường

- Node.js **24.9 trở lên**
- MySQL **8** — không dùng MariaDB/XAMPP, vì collation `utf8mb4_0900_ai_ci` chỉ có trên MySQL 8

Tài liệu API (Swagger): http://localhost:3000/api

## Biến môi trường

| Biến | Ý nghĩa | Ví dụ |
|---|---|---|
| `DATABASE_URL` | Chuỗi kết nối MySQL | `mysql://USER:PASSWORD@localhost:3306/payment_request` |
| `JWT_SECRET` | Bí mật dùng để ký token
| `JWT_EXPIRES_IN` | Thời hạn token, **tính bằng giây** | `28800` (8 giờ) |``

Thiếu `JWT_SECRET` hoặc `JWT_EXPIRES_IN` không phải số nguyên dương thì app **dừng ngay khi khởi động** kèm thông báo tên biến.

## Tài khoản test

> ⚠️ Chỉ dùng cho môi trường dev. Mật khẩu chung cho mọi tài khoản: **`123456`**

| Email | Vai trò | Site |
|---|---|---|
| `nguoitao@example.com` | Người tạo | Hà Nội |
| `truongphong@example.com` | Trưởng phòng | Hà Nội |
| `truongphong.hcm@example.com` | Trưởng phòng | Hồ Chí Minh |
| `bgd@example.com` | Ban Giám đốc | Hà Nội |
| `ketoanthanhtoan@example.com` | Kế toán thanh toán | Hà Nội, Hồ Chí Minh |
| `ketoantonghop@example.com` | Kế toán tổng hợp | Hà Nội |
| `ketoantruong@example.com` | Kế toán trưởng | Hà Nội |
| `nguoixem@example.com` | Người xem | Hà Nội |
| `admin@example.com` | Admin | Hà Nội |
| `chuagansite@example.com` | *Chưa gán vai trò nào* | — |
| `nghiviec@example.com` | *Đã vô hiệu hoá — không đăng nhập được* | — |

Dữ liệu mẫu còn có **13 đề nghị thanh toán**: 9 đề nghị ở Hà Nội trải đủ các trạng thái, 2 bản nháp, 2 đề nghị ở Hồ Chí Minh. Người tạo được đặt làm người theo dõi của một đề nghị ở Hồ Chí Minh.

## Sử dụng API

**Đăng nhập** — `POST /auth/login`:

```json
{ "email": "nguoitao@example.com", "password": "123456" }
```

Nhận về `accessToken`, hiệu lực 8 giờ. Mọi API khác đều cần gửi kèm header:

```
Authorization: Bearer <accessToken>
```

Trên Swagger: bấm **Authorize**, dán **chỉ chuỗi token** (không gõ chữ `Bearer`). Mỗi lần đổi tài khoản phải Authorize lại bằng token mới.

Tài khoản bị vô hiệu hoá sẽ bị từ chối ngay ở request kế tiếp, kể cả khi token vẫn còn hạn.

### Danh sách endpoint

| Endpoint | Làm gì |
|---|---|
| `POST /auth/login` | Đăng nhập, nhận token — **không cần đăng nhập** |
| `GET /auth/me` | Thông tin người đang đăng nhập, kèm danh sách vai trò theo site |
| `GET /payment-request` | Danh sách đề nghị người đang đăng nhập được xem |
| `GET /payment-request/:id` | Chi tiết một đề nghị |
| `POST /payment-request` | Tạo bản nháp — chỉ bắt buộc `siteId` |
| `PATCH /payment-request/:id` | Sửa bản nháp — chỉ gửi những trường thay đổi; gửi `null` để xoá trống một trường. Dùng được cho tự lưu |
| `DELETE /payment-request/:id` | Xoá bản nháp |
| `POST /payment-request/:id/submit` | Gửi duyệt: kiểm đủ trường, sinh mã `ĐNTT-YYYY-NNNN`, chuyển sang *Khởi tạo* |
| `POST /payment-request/:id/transition` | Chuyển trạng thái — xem mục bên dưới |

Mọi route mặc định **cần đăng nhập**; route mới thêm vào cũng tự động được bảo vệ.

### Chuyển trạng thái

`POST /payment-request/:id/transition` với body:

```json
{ "to": "TRUONG_PHONG_DUYET", "note": "...", "version": 0 }
```

- **`to`** — trạng thái đích
- **`note`** — bắt buộc với bước từ chối (lý do, tối thiểu 10 ký tự) và bước chuyển sang *Đã CK, chờ bổ sung hồ sơ* (chứng từ còn thiếu)
- **`version`** — **bắt buộc**: số `version` của đề nghị mà người dùng **đang thấy trên màn hình**, lấy từ response `GET`. Nếu đề nghị đã bị người khác thay đổi sau đó, API trả **ERR-202** — client cần tải lại đề nghị rồi để người dùng quyết định lại

Các bước được phép:

| Từ | Sang | Ai thực hiện |
|---|---|---|
| Khởi tạo | Trưởng phòng duyệt | Người được chỉ định duyệt, BGĐ hoặc Admin trong site |
| Trưởng phòng duyệt | BGĐ duyệt | Như trên |
| BGĐ duyệt | Kế toán xử lý | Kế toán tổng hợp, Kế toán trưởng, Kế toán thanh toán trong site; Admin |
| Kế toán xử lý | Đã CK, chờ bổ sung hồ sơ | Kế toán thanh toán trong site; Admin — **kèm ghi chú chứng từ thiếu** |
| Kế toán xử lý | Đã thanh toán | Như trên |
| Đã CK, chờ bổ sung hồ sơ | Đã thanh toán | Như trên |
| Đã thanh toán | Đã in PDF | Như trên |
| Khởi tạo / Trưởng phòng duyệt / BGĐ duyệt | BGĐ từ chối | Người được chỉ định duyệt, BGĐ hoặc Admin trong site — **kèm lý do** |

*Đã in PDF* và *BGĐ từ chối* là trạng thái kết thúc — không chuyển đi đâu được nữa. Mọi bước không có trong bảng đều bị từ chối với **ERR-201**.

Mỗi lần gửi duyệt hoặc chuyển trạng thái, hệ thống ghi một dòng nhật ký: ai, lúc nào, từ trạng thái nào sang trạng thái nào, kèm ghi chú. Thay đổi trạng thái và nhật ký được ghi trong cùng một giao dịch — không có trường hợp đổi trạng thái mà thiếu nhật ký.

## Phân quyền xem

Mỗi người thấy những đề nghị thoả **ít nhất một** điều kiện:

| Điều kiện | Áp dụng cho |
|---|---|
| Do mình tạo — kể cả bản nháp | Mọi người |
| Mình được chọn làm người duyệt | Mọi người |
| Mình được chọn làm người theo dõi | Mọi người — chỉ xem, không bình luận, không quyết định |
| Thuộc site mà mình có vai trò xem cả site | Trưởng phòng, Ban Giám đốc, các vai trò Kế toán, Người xem |

- **Bản nháp chỉ người tạo thấy** — kể cả Admin cũng không thấy nháp của người khác
- **Admin** thấy mọi đề nghị ở mọi site, trừ nháp của người khác
- **Ban Giám đốc** có quyền như Admin **trong site của mình**: xem mọi đề nghị trong site, duyệt và từ chối kể cả khi không được chỉ định
- Vai trò được **đọc lại từ database ở mỗi request** chứ không lưu trong token, nên thu hồi quyền có hiệu lực ngay

Gọi API với đề nghị mình không được xem sẽ nhận **ERR-203** — kể cả khi gửi thao tác không hợp lệ, hệ thống cũng không để lộ trạng thái của đề nghị đó.

Phân quyền gồm ba phần: `src/access/build-scope.ts` (ai **xem** được gì), `src/access/policies.ts` (ai được **làm** hành động gì), `src/payment-request/transitions.ts` (bảng **chuyển trạng thái** viết dạng dữ liệu).

## Quy ước về thời gian

- Mọi thời điểm lưu theo **UTC**; API trả về dạng ISO 8601
- Hạn thanh toán là **ngày**, không có giờ — lưu bằng cột kiểu `DATE`, gửi lên dạng `"2026-10-15"`
- Mọi phép tính theo ngày (hôm nay, ngày tạo, năm trong mã đề nghị) dùng múi giờ **`Asia/Ho_Chi_Minh`**, không phụ thuộc múi giờ máy chủ — xem `src/utils/business-date.ts`

## Định dạng lỗi

Lỗi do hệ thống chủ động trả về có dạng:

```json
{ "code": "ERR-101", "message": "Vui lòng điền các trường còn thiếu được đánh dấu.", "details": { "fields": ["title"] } }
```

| Mã | HTTP | Khi nào |
|---|---|---|
| `ERR-100` | 400 | Gửi lên trường không được phép |
| `ERR-101` | 400 | Thiếu trường bắt buộc |
| `ERR-102` | 400 | Số tiền không lớn hơn 0 |
| `ERR-103` | 400 | Hạn thanh toán trước ngày tạo đề nghị |
| `ERR-105` | 400 | Chọn chính mình làm người duyệt |
| `ERR-106` | 400 | Người được chọn không có quyền duyệt tại site của đề nghị |
| `ERR-107` | 400 | Trường sai định dạng hoặc độ dài |
| `ERR-201` | 409 | Bước chuyển trạng thái không hợp lệ |
| `ERR-202` | 409 | Đề nghị đã bị người khác thay đổi — cần tải lại |
| `ERR-203` | 403 | Không có quyền xem hoặc thực hiện thao tác |
| `ERR-900` | 500 | Lỗi hệ thống — kèm **mã tra cứu**; chi tiết chỉ ghi trong log server |

`details.fields` cho biết những trường nào gặp lỗi.

Lỗi `401` (chưa đăng nhập, token sai hoặc hết hạn, sai email/mật khẩu) và `404` (đề nghị không tồn tại) trả về theo dạng mặc định của NestJS.

## Lệnh thường dùng

| Lệnh | Làm gì |
|---|---|
| `npm run start:dev` | Chạy, tự tải lại khi sửa code trong `src/` |
| `npm run build` | Build ra `dist/` |
| `npm run db:migrate` | Áp các migration có sẵn vào database |
| `npm run db:migrate:dev -- --name <tên>` | Khi phát triển: sinh migration mới từ thay đổi trong schema, rồi sinh lại Prisma Client |
| `npm run db:seed` | Nạp dữ liệu mẫu |
| `npm test` | Chạy test tự động |
| `npm run lint` | Kiểm lỗi code |
| `npm run format` | Định dạng code trong `src/` và `test/` |

## Cấu trúc thư mục

```
prisma/
├── schema.prisma          mô hình dữ liệu
├── migrations/            lịch sử thay đổi cấu trúc database
└── seed.ts                dữ liệu mẫu
src/
├── main.ts                khởi động app: Swagger, kiểm dữ liệu đầu vào, xử lý lỗi
├── errors/                mã lỗi và bộ xử lý lỗi dùng chung
├── prisma/                kết nối database
├── auth/                  đăng nhập, kiểm token, guard toàn cục
├── access/                phân quyền: ai xem được gì, ai được làm gì
├── payment-request/       đề nghị thanh toán: nháp, gửi duyệt, chuyển trạng thái
├── utils/                 tính ngày theo múi giờ nghiệp vụ
└── generated/             Prisma Client (tự sinh, không commit)
```