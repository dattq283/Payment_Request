# Hệ thống quản lý Đề nghị thanh toán — Backend API

API cho quy trình tạo, duyệt và thanh toán đề nghị thanh toán nội bộ.

## Công nghệ

NestJS 12 · Prisma 7.10 · MySQL 8 · TypeScript 6 · JWT

## Yêu cầu môi trường

- Node.js **24.9 trở lên**
- MySQL **8** — không dùng MariaDB/XAMPP, vì collation `utf8mb4_0900_ai_ci` chỉ có trên MySQL 8

## Chạy lần đầu

**1. Cài thư viện** — lệnh này tự chạy `prisma generate` để sinh Prisma Client:

```bash
npm install
```

**2. Tạo database:**

```sql
CREATE DATABASE PaymentRequest
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;
```

**3. Tạo file `.env`** từ mẫu, rồi điền giá trị (xem mục *Biến môi trường*):

```bash
cp .env.example .env
```

**4. Tạo bảng:**

```bash
npm run db:migrate
```

**5. Nạp dữ liệu mẫu** — chạy lại nhiều lần không bị trùng:

```bash
npm run db:seed
```

**6. Chạy:**

```bash
npm run start:dev
```

Tài liệu API (Swagger): http://localhost:3000/api

## Biến môi trường

| Biến | Ý nghĩa | Ví dụ |
|---|---|---|
| `DATABASE_URL` | Chuỗi kết nối MySQL | `mysql://USER:PASSWORD@localhost:3306/PaymentRequest` |
| `JWT_SECRET` | Bí mật dùng để ký token | Sinh ngẫu nhiên bằng lệnh bên dưới |
| `JWT_EXPIRES_IN` | Thời hạn token, **tính bằng giây** | `28800` (8 giờ) |


Thiếu `JWT_SECRET` hoặc `JWT_EXPIRES_IN` không phải số nguyên dương thì app **dừng ngay khi khởi động** kèm thông báo tên biến.

## Tài khoản test

> ⚠️ Chỉ dùng cho môi trường dev. Mật khẩu chung cho mọi tài khoản: **`123456`**

| Email | Vai trò | Site |
|---|---|---|
| `nguoitao@example.com` | Người tạo | Hà Nội |
| `truongphong@example.com` | Trưởng phòng | Hà Nội |
| `bgd@example.com` | Ban Giám đốc | Hà Nội |
| `ketoanthanhtoan@example.com` | Kế toán thanh toán | Hà Nội, Hồ Chí Minh |
| `ketoantonghop@example.com` | Kế toán tổng hợp | Hà Nội |
| `ketoantruong@example.com` | Kế toán trưởng | Hà Nội |
| `nguoixem@example.com` | Người xem | Hà Nội |
| `admin@example.com` | Admin | Hà Nội |
| `chuagansite@example.com` | *Chưa gán vai trò nào* | — |
| `nghiviec@example.com` | *Đã vô hiệu hoá — không đăng nhập được* | — |

Dữ liệu mẫu còn có **12 đề nghị thanh toán**: 9 đề nghị ở Hà Nội trải đủ 8 trạng thái, 2 bản nháp, và 1 đề nghị ở Hồ Chí Minh.

## Sử dụng API

**Đăng nhập** — `POST /auth/login`:

```json
{ "email": "nguoitao@example.com", "password": "123456" }
```

Nhận về `accessToken`, hiệu lực 8 giờ.

**Gọi API cần đăng nhập** — gửi kèm header:

```
Authorization: Bearer <accessToken>
```

Trên Swagger: bấm nút **Authorize**, dán **chỉ chuỗi token** (không gõ chữ `Bearer` — Swagger tự thêm). Mỗi lần đổi tài khoản phải Authorize lại bằng token mới.

| Endpoint | Cần đăng nhập | Làm gì |
|---|---|---|
| `POST /auth/login` | Không | Đăng nhập, nhận token |
| `GET /auth/me` | Có | Thông tin người đang đăng nhập |
| `GET /payment-request` | Có | Danh sách đề nghị mà người đang đăng nhập được xem |

Tài khoản bị vô hiệu hoá sẽ bị từ chối ngay ở request kế tiếp, kể cả khi token vẫn còn hạn.

## Phân quyền xem

Mỗi người chỉ thấy những đề nghị thoả **ít nhất một** điều kiện:

| Điều kiện | Áp dụng cho |
|---|---|
| Do mình tạo — kể cả bản nháp | Mọi người |
| Mình được chọn làm người duyệt | Mọi người |
| Thuộc site mà mình có vai trò xem cả site | Trưởng phòng, Ban Giám đốc, các vai trò Kế toán, Người xem |

- **Bản nháp chỉ người tạo thấy** — kể cả Admin cũng không thấy nháp của người khác
- **Admin** thấy mọi đề nghị ở mọi site, trừ nháp của người khác
- Vai trò được **đọc lại từ database ở mỗi request** chứ không lưu trong token, nên thu hồi quyền có hiệu lực ngay

Toàn bộ luật nằm trong một hàm: `src/access/build-scope.ts`. Hàm nhận id người dùng và danh sách vai trò, trả về điều kiện `where` cho Prisma.

### Vì sao viết tay mà không dùng CASL

- **Luật xem chỉ có ba nhánh** như bảng trên — một hàm là đủ, không cần thêm thư viện
- **Luồng duyệt của hệ thống là chuyển trạng thái** ("từ trạng thái A sang B, ai làm, cần điều kiện gì"). CASL mô tả tốt "ai được làm gì với đối tượng nào", nhưng không mô tả được "từ A sang B" — dùng CASL thì phần chuyển trạng thái vẫn phải viết riêng
- **CASL với Prisma 7** phải viết thêm lớp bọc, vì CASL đọc kiểu từ `@prisma/client`, còn Prisma 7 sinh kiểu vào thư mục riêng của project
- **Dễ kiểm và gỡ lỗi:** `buildScope` là hàm thuần, test không cần database; muốn biết vì sao một người thấy được gì, chỉ cần in kết quả của nó ra

Nếu sau này có nhiều loại dữ liệu cùng cần phân quyền theo hành động, gom luật về một chỗ bằng CASL có thể đáng cân nhắc lại.

## Định dạng lỗi

Lỗi do hệ thống chủ động trả về có dạng:

```json
{ "code": "ERR-101", "message": "Vui lòng điền các trường còn thiếu được đánh dấu.", "details": { "fields": ["password"] } }
```

| Mã | Khi nào |
|---|---|
| `ERR-100` | Gửi lên trường không được phép |
| `ERR-101` | Thiếu trường bắt buộc |
| `ERR-107` | Trường sai định dạng (ví dụ email không hợp lệ) |
| `ERR-900` | Lỗi hệ thống — kèm **mã tra cứu**; chi tiết lỗi chỉ ghi trong log server |

`details.fields` cho biết những trường nào gặp lỗi.

Lỗi `401` (chưa đăng nhập, token sai hoặc hết hạn, sai email/mật khẩu) trả về theo dạng mặc định của NestJS.

## Lệnh thường dùng

| Lệnh | Làm gì |
|---|---|
| `npm run start:dev` | Chạy, tự tải lại khi sửa code trong `src/` |
| `npm run build` | Build ra `dist/` |
| `npm run db:migrate` | Áp các migration vào database |
| `npm run db:seed` | Nạp dữ liệu mẫu |
| `npm test` | Chạy test |
| `npm run lint` | Kiểm lỗi code |
| `npm run format` | Định dạng code |

Sửa `.env` thì phải **dừng hẳn và chạy lại** app — `start:dev` không theo dõi file này.

## Cấu trúc thư mục

```
prisma/
├── schema.prisma        mô hình dữ liệu
├── migrations/          lịch sử thay đổi cấu trúc database
└── seed.ts              dữ liệu mẫu
src/
├── main.ts              khởi động app: Swagger, kiểm dữ liệu đầu vào, xử lý lỗi
├── errors/              mã lỗi và bộ xử lý lỗi dùng chung
├── prisma/              kết nối database
├── auth/                đăng nhập, kiểm token
├── access/              phân quyền xem
├── payment-request/     đề nghị thanh toán
└── generated/           Prisma Client (tự sinh, không commit)
```

## Lỗi hay gặp

- **`npx prisma` chạy ra sai phiên bản** — nếu máy có cài Prisma toàn cục bản khác, `npx` có thể gọi nhầm. Luôn dùng các lệnh `npm run db:*` ở trên
- **Test báo lỗi nạp ES Module** — chạy qua `npm test`, không gọi `npx jest` trực tiếp; kiểm Node đủ 24.9 trở lên