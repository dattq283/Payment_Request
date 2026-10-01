import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import {
  Currency,
  Prisma,
  PrismaClient,
  RequestStatus,
  Role,
  SiteCode,
} from '../src/generated/prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL!),
});

async function main() {
  //upsert Site
  const HaNoi = await prisma.site.upsert({
    where: { code: SiteCode.HA_NOI },
    update: {},
    create: { code: SiteCode.HA_NOI, name: 'Hà Nội' },
  });
  const ThaiNguyen = await prisma.site.upsert({
    where: { code: SiteCode.THAI_NGUYEN },
    update: {},
    create: { code: SiteCode.THAI_NGUYEN, name: 'Thái Nguyên' },
  });
  const HoChiMinh = await prisma.site.upsert({
    where: { code: SiteCode.HO_CHI_MINH },
    update: {},
    create: { code: SiteCode.HO_CHI_MINH, name: 'Hồ Chí Minh' },
  });

  //upsert user
  const passwordHash = await bcrypt.hash('123456', 10);
  const nguoiTao = await prisma.user.upsert({
    where: { email: 'nguoitao@example.com' },
    update: {},
    create: { email: 'nguoitao@example.com', name: 'Người tạo', passwordHash },
  });
  const truongPhongHN = await prisma.user.upsert({
    where: { email: 'truongphong@example.com' },
    update: {},
    create: {
      email: 'truongphong@example.com',
      name: 'Trưởng phòng',
      passwordHash,
    },
  });
  const truongPhongHCM = await prisma.user.upsert({
    where: { email: 'truongphonghcm.@example.com' },
    update: {},
    create: {
      email: 'truongphonghcm.@example.com',
      name: 'Trưởng phòng HCM',
      passwordHash,
    },
  });
  const BGD = await prisma.user.upsert({
    where: { email: 'bgd@example.com' },
    update: {},
    create: { email: 'bgd@example.com', name: 'Ban Giám Đốc', passwordHash },
  });
  const keToanThanhToan = await prisma.user.upsert({
    where: { email: 'ketoanthanhtoan@example.com' },
    update: {},
    create: {
      email: 'ketoanthanhtoan@example.com',
      name: 'Kế toán thanh toán',
      passwordHash,
    },
  });
  const keToanTongHop = await prisma.user.upsert({
    where: { email: 'ketoantonghop@example.com' },
    update: {},
    create: {
      email: 'ketoantonghop@example.com',
      name: 'Kế toán tổng hợp',
      passwordHash,
    },
  });
  const keToanTruong = await prisma.user.upsert({
    where: { email: 'ketoantruong@example.com' },
    update: {},
    create: {
      email: 'ketoantruong@example.com',
      name: 'Kế toán trưởng',
      passwordHash,
    },
  });
  const nguoiXem = await prisma.user.upsert({
    where: { email: 'nguoixem@example.com' },
    update: {},
    create: { email: 'nguoixem@example.com', name: 'Người xem', passwordHash },
  });
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: { email: 'admin@example.com', name: 'Admin', passwordHash },
  });

  const chuaGanSite = await prisma.user.upsert({
    where: { email: 'chuagansite@example.com' },
    update: {},
    create: {
      email: 'chuagansite@example.com',
      name: 'Chưa gán site',
      passwordHash,
    },
  });
  const nghiViec = await prisma.user.upsert({
    where: { email: 'nghiviec@example.com' },
    update: {},
    create: {
      email: 'nghiviec@example.com',
      name: 'Đã nghỉ việc',
      passwordHash,
      isActive: false,
    },
  });

  // upsert role
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: nguoiTao.id,
        siteId: HaNoi.id,
        role: Role.NGUOI_TAO,
      },
    },
    update: {},
    create: { userId: nguoiTao.id, siteId: HaNoi.id, role: Role.NGUOI_TAO },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: truongPhongHN.id,
        siteId: HaNoi.id,
        role: Role.TRUONG_PHONG,
      },
    },
    update: {},
    create: {
      userId: truongPhongHN.id,
      siteId: HaNoi.id,
      role: Role.TRUONG_PHONG,
    },
  });
    await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: { userId: truongPhongHCM.id, siteId: HoChiMinh.id, role: Role.TRUONG_PHONG },
    },
    update: {},
    create: { userId: truongPhongHCM.id, siteId: HoChiMinh.id, role: Role.TRUONG_PHONG },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: { userId: BGD.id, siteId: HaNoi.id, role: Role.BGD },
    },
    update: {},
    create: { userId: BGD.id, siteId: HaNoi.id, role: Role.BGD },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: keToanThanhToan.id,
        siteId: HaNoi.id,
        role: Role.KT_THANH_TOAN,
      },
    },
    update: {},
    create: {
      userId: keToanThanhToan.id,
      siteId: HaNoi.id,
      role: Role.KT_THANH_TOAN,
    },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: keToanThanhToan.id,
        siteId: HoChiMinh.id,
        role: Role.KT_THANH_TOAN,
      },
    },
    update: {},
    create: {
      userId: keToanThanhToan.id,
      siteId: HoChiMinh.id,
      role: Role.KT_THANH_TOAN,
    },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: keToanTongHop.id,
        siteId: HaNoi.id,
        role: Role.KT_TONG_HOP,
      },
    },
    update: {},
    create: {
      userId: keToanTongHop.id,
      siteId: HaNoi.id,
      role: Role.KT_TONG_HOP,
    },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: keToanTruong.id,
        siteId: HaNoi.id,
        role: Role.KT_TRUONG,
      },
    },
    update: {},
    create: { userId: keToanTruong.id, siteId: HaNoi.id, role: Role.KT_TRUONG },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: nguoiXem.id,
        siteId: HaNoi.id,
        role: Role.NGUOI_XEM,
      },
    },
    update: {},
    create: { userId: nguoiXem.id, siteId: HaNoi.id, role: Role.NGUOI_XEM },
  });
  await prisma.userSiteRole.upsert({
    where: {
      userId_siteId_role: {
        userId: admin.id,
        siteId: HaNoi.id,
        role: Role.ADMIN,
      },
    },
    update: {},
    create: { userId: admin.id, siteId: HaNoi.id, role: Role.ADMIN },
  });
  console.log('users:', await prisma.user.count());

  const CREATED_AT = new Date('2026-07-20');

  type SeedRequest = Prisma.PaymentRequestUncheckedCreateInput & { id: string };

  const requests: SeedRequest[] = [
    {
      id: 'seed-01',
      code: 'ĐNTT-2026-0001',
      siteId: HaNoi.id,
      title: 'Thanh toán cọc 50% tiền in Sale kit và bìa thư A5 Việt Tín',
      amount: 3202200,
      currency: Currency.VND,
      paymentContent: 'Thanh toán cọc 50% tiền in Sale kit và bìa thư A5',
      bankName: 'VietinBank',
      bankAccount: '1050 2233 8891',
      recipientName: 'Công ty TNHH In ấn Sao Việt',
      dueDate: new Date('2026-09-07'),
      status: RequestStatus.KHOI_TAO,
      creatorId: nguoiTao.id,
      approverId: truongPhongHN.id,
    },
    {
      id: 'seed-02',
      code: 'ĐNTT-2026-0002',
      siteId: HaNoi.id,
      title: 'Thanh toán chuyển phát hồ sơ tháng 8/2026',
      amount: 1042002,
      currency: Currency.VND,
      paymentContent: 'Chi phí chuyển phát nhanh hồ sơ chi nhánh',
      bankName: 'Techcombank',
      bankAccount: '1903 4455 0012',
      recipientName: 'Công ty CP Chuyển phát Nhanh Bắc Việt',
      dueDate: new Date('2026-09-14'),
      status: RequestStatus.KHOI_TAO,
      creatorId: truongPhongHN.id,
      approverId: BGD.id,
    },
    {
      id: 'seed-03',
      code: 'ĐNTT-2026-0003',
      siteId: HaNoi.id,
      title: 'Đề nghị thanh toán hành chính phí quý III',
      amount: 787748,
      currency: Currency.VND,
      paymentContent: 'Đề nghị thanh toán hành chính phí quý III/2026',
      bankName: 'VietinBank',
      bankAccount: '1050 8877 2210',
      recipientName: 'Công ty TNHH Dịch vụ Hành chính An Phát',
      dueDate: new Date('2026-08-28'),
      status: RequestStatus.BGD_DUYET,
      creatorId: nguoiTao.id,
      approverId: truongPhongHN.id,
    },
    {
      id: 'seed-04',
      code: 'ĐNTT-2026-0004',
      siteId: HaNoi.id,
      title: 'Chi phí ngoại giao đối tác Singapore',
      amount: 4800,
      currency: Currency.USD,
      paymentContent: 'Chi phí ngoại giao, vé máy bay đối tác',
      bankName: 'HSBC',
      bankAccount: '0071 2233 4455',
      recipientName: 'Pacific Partners Pte. Ltd.',
      dueDate: new Date('2026-09-20'),
      status: RequestStatus.BGD_DUYET,
      creatorId: truongPhongHN.id,
      approverId: BGD.id,
    },
    {
      id: 'seed-05',
      code: 'ĐNTT-2026-0005',
      siteId: HaNoi.id,
      title: 'Thanh toán linh kiện máy tính khối kỹ thuật',
      amount: 25400000,
      currency: Currency.VND,
      paymentContent: 'Linh kiện máy tính, thay thế 12 máy trạm',
      bankName: 'MB Bank',
      bankAccount: '0031 9988 7766',
      recipientName: 'Công ty CP Máy tính Hà Nội',
      dueDate: new Date('2026-10-10'),
      status: RequestStatus.KT_XU_LY,
      creatorId: nguoiTao.id,
      approverId: BGD.id,
    },
    {
      id: 'seed-06',
      code: 'ĐNTT-2026-0006',
      siteId: HaNoi.id,
      title: 'Tạm ứng công tác Thái Nguyên tháng 9',
      amount: 12500000,
      currency: Currency.VND,
      paymentContent: 'Tạm ứng công tác, chờ bổ sung hoá đơn khách sạn',
      bankName: 'VietinBank',
      bankAccount: '1050 1122 3344',
      recipientName: 'Nguyễn Văn An',
      dueDate: new Date('2026-09-18'),
      status: RequestStatus.DA_CK_CHO_BO_SUNG,
      creatorId: nguoiTao.id,
      approverId: truongPhongHN.id,
    },
    {
      id: 'seed-07',
      code: 'ĐNTT-2026-0007',
      siteId: HaNoi.id,
      title: 'Nộp tiền thuế sử dụng đất phi nông nghiệp 320CMT8',
      amount: 1042002,
      currency: Currency.VND,
      paymentContent: 'Nộp thuế SDĐ phi nông nghiệp kỳ 2/2026',
      bankName: 'Kho bạc Nhà nước',
      bankAccount: '7111 0000 1234',
      recipientName: 'Kho bạc Nhà nước quận 3',
      dueDate: new Date('2026-09-14'),
      status: RequestStatus.DA_THANH_TOAN,
      creatorId: truongPhongHN.id,
      approverId: BGD.id,
    },
    {
      id: 'seed-08',
      code: 'ĐNTT-2026-0008',
      siteId: HaNoi.id,
      title: 'Thanh toán dịch vụ vệ sinh văn phòng tháng 7',
      amount: 8600000,
      currency: Currency.VND,
      paymentContent: 'Dịch vụ vệ sinh văn phòng tháng 7/2026',
      bankName: 'ACB',
      bankAccount: '2288 4455 9900',
      recipientName: 'Công ty TNHH Vệ sinh Công nghiệp Xanh',
      dueDate: new Date('2026-08-05'),
      status: RequestStatus.DA_IN_PDF,
      creatorId: nguoiTao.id,
      approverId: truongPhongHN.id,
    },
    {
      id: 'seed-09',
      code: 'ĐNTT-2026-0009',
      siteId: HaNoi.id,
      title: 'Đề nghị mua 5 màn hình phụ cho phòng kinh doanh',
      amount: 14750000,
      currency: Currency.VND,
      paymentContent: 'Mua 5 màn hình 27 inch cho phòng kinh doanh',
      bankName: 'VPBank',
      bankAccount: '0455 7788 1122',
      recipientName: 'Công ty CP Thế giới Số',
      dueDate: new Date('2026-09-21'),
      status: RequestStatus.BGD_TU_CHOI,
      rejectReason:
        'Phòng kinh doanh đã được cấp màn hình trong quý II, đề nghị rà soát lại nhu cầu.',
      creatorId: nguoiTao.id,
      approverId: BGD.id,
    },

    // ---- Kiểm phân quyền ----
    {
      // Nháp của Người tạo — chỉ chính họ thấy
      id: 'seed-10',
      siteId: HaNoi.id,
      title: 'Mua văn phòng phẩm tháng 10',
      amount: 2350000,
      currency: Currency.VND,
      paymentContent: 'Giấy in, bút, sổ ghi chép cho phòng hành chính',
      bankName: 'Vietcombank',
      bankAccount: '0011 2233 4455',
      recipientName: 'Công ty TNHH Văn phòng phẩm Hồng Hà',
      dueDate: new Date('2026-10-15'),
      status: RequestStatus.NHAP,
      creatorId: nguoiTao.id,
    },
    {
      // Nháp của Trưởng phòng — Admin cũng không được thấy
      id: 'seed-11',
      siteId: HaNoi.id,
      title: 'Thuê hội trường họp tổng kết quý IV',
      amount: 18000000,
      currency: Currency.VND,
      paymentContent: 'Thuê hội trường và âm thanh cho buổi họp tổng kết',
      bankName: 'BIDV',
      bankAccount: '2150 1234 5678',
      recipientName: 'Trung tâm Hội nghị Thăng Long',
      dueDate: new Date('2026-10-30'),
      status: RequestStatus.NHAP,
      creatorId: truongPhongHN.id,
    },
    {
      id: 'seed-12',
      code: 'ĐNTT-2026-0010',
      siteId: HoChiMinh.id,
      title: 'Thanh toán phí bảo trì thang máy chi nhánh HCM',
      amount: 9800000,
      currency: Currency.VND,
      paymentContent: 'Bảo trì định kỳ hệ thống thang máy quý IV',
      bankName: 'Sacombank',
      bankAccount: '0600 1122 3344',
      recipientName: 'Công ty TNHH Thang máy Phương Nam',
      dueDate: new Date('2026-10-05'),
      status: RequestStatus.KHOI_TAO,
      creatorId: keToanThanhToan.id,
      approverId: BGD.id,
    },
        {
      id: 'seed-13', code: 'ĐNTT-2026-0011', siteId: HoChiMinh.id,
      title: 'Thanh toán tiền điện văn phòng HCM tháng 9',
      amount: 6200000, currency: Currency.VND,
      paymentContent: 'Tiền điện văn phòng chi nhánh HCM kỳ tháng 9/2026',
      bankName: 'Agribank', bankAccount: '1600 2233 4455',
      recipientName: 'Tổng công ty Điện lực TP.HCM',
      dueDate: new Date('2026-10-20'), status: RequestStatus.KHOI_TAO,
      creatorId: keToanThanhToan.id, approverId: truongPhongHCM.id,
    },
  ];

  for (const data of requests) {
    await prisma.paymentRequest.upsert({
      where: { id: data.id },
      update: {},
      create: { ...data, createdAt: CREATED_AT },
    });
  }

  console.log('payment requests:', await prisma.paymentRequest.count());
  const watchers = [
    { requestId: 'seed-12', userId: nguoiTao.id }, // ở HCM — xem được nhờ theo dõi dù khác site
    { requestId: 'seed-11', userId: nguoiTao.id }, // nháp — theo dõi vẫn không thấy (BR-17)
  ];

  for (const w of watchers) {
    await prisma.requestWatcher.upsert({
      where: { requestId_userId: w },
      update: {},
      create: w,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
