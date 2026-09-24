import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import {
  PrismaClient,
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
    where: {code: SiteCode.THAI_NGUYEN},
    update: {},
    create:{code: SiteCode.THAI_NGUYEN, name: "Thái Nguyên"},
  });
  const HoChiMinh = await prisma.site.upsert({
    where: {code: SiteCode.HO_CHI_MINH},
    update: {},
    create:{code: SiteCode.HO_CHI_MINH, name: "Hồ Chí Minh"},
  });
  
  //upsert user
  const passwordHash= await bcrypt.hash("123456", 10);
  const nguoiTao = await prisma.user.upsert({
    where: {email: 'nguoitao@example.com'},
    update:{},
    create:{email: 'nguoitao@example.com', name:"Người tạo", passwordHash},
  });
  const truongPhong = await prisma.user.upsert({
    where: {email: 'truongphong@example.com'},
    update:{},
    create:{email: 'truongphong@example.com', name:"Trưởng phòng", passwordHash},
  });
  const BGD= await prisma.user.upsert({
    where: {email: 'bgd@example.com'},
    update:{},
    create:{email: 'bgd@example.com', name:"Ban Giám Đốc", passwordHash},
  });
  const keToanThanhToan= await prisma.user.upsert({
    where: {email: 'ketoanthanhtoan@example.com'},
    update:{},
    create:{email: 'ketoanthanhtoan@example.com', name:"Kế toán thanh toán", passwordHash},
  });
  const keToanTongHop= await prisma.user.upsert({
    where: {email: 'ketoantonghop@example.com'},
    update:{},
    create:{email: 'ketoantonghop@example.com', name:"Kế toán tổng hợp", passwordHash},
  });
  const keToanTruong= await prisma.user.upsert({
    where: {email: 'ketoantruong@example.com'},
    update:{},
    create:{email: 'ketoantruong@example.com', name:"Kế toán trưởng", passwordHash},
  });
  const nguoiXem= await prisma.user.upsert({
    where: {email: 'nguoixem@example.com'},
    update:{},
    create:{email: 'nguoixem@example.com', name:"Người xem", passwordHash},
  });
  const admin = await prisma.user.upsert({
    where: {email: 'admin@example.com'},
    update:{},
    create:{email: 'admin@example.com', name:"Admin", passwordHash},
  });
  
  const chuaGanSite = await prisma.user.upsert({
    where:{email: 'chuagansite@example.com'},
    update:{},
    create:{email:'chuagansite@example.com', name: "Chưa gán site", passwordHash},
  });
  const nghiViec = await prisma.user.upsert({
    where:{email: 'nghiviec@example.com'},
    update:{},
    create:{email:'nghiviec@example.com', name: "Đã nghỉ việc", passwordHash, isActive: false},
  });

  // upsert role
  await prisma.userSiteRole.upsert({
    where:{userId_siteId_role: {userId: nguoiTao.id, siteId: HaNoi.id, role: Role.NGUOI_TAO}},
    update:{},
    create:{userId: nguoiTao.id,siteId: HaNoi.id, role: Role.NGUOI_TAO},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: truongPhong.id, siteId: HaNoi.id, role: Role.TRUONG_PHONG}},
    update:{},
    create:{userId: truongPhong.id,siteId: HaNoi.id, role: Role.TRUONG_PHONG},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: BGD.id, siteId: HaNoi.id, role: Role.BGD}},
    update:{},
    create:{userId: BGD.id,siteId: HaNoi.id, role: Role.BGD},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: keToanThanhToan.id, siteId: HaNoi.id, role: Role.KT_THANH_TOAN}},
    update:{},
    create:{userId: keToanThanhToan.id,siteId: HaNoi.id, role: Role.KT_THANH_TOAN},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: keToanThanhToan.id, siteId: HoChiMinh.id, role: Role.KT_THANH_TOAN}},
    update:{},
    create:{userId: keToanThanhToan.id,siteId: HoChiMinh.id, role: Role.KT_THANH_TOAN},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: keToanTongHop.id, siteId: HaNoi.id, role: Role.KT_TONG_HOP}},
    update:{},
    create:{userId: keToanTongHop.id,siteId: HaNoi.id, role: Role.KT_TONG_HOP},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: keToanTruong.id, siteId: HaNoi.id, role: Role.KT_TRUONG}},
    update:{},
    create:{userId: keToanTruong.id,siteId: HaNoi.id, role: Role.KT_TRUONG},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: nguoiXem.id, siteId: HaNoi.id, role: Role.NGUOI_XEM}},
    update:{},
    create:{userId: nguoiXem.id,siteId: HaNoi.id, role: Role.NGUOI_XEM},
  });
  await prisma.userSiteRole.upsert({
     where:{userId_siteId_role: {userId: admin.id, siteId: HaNoi.id, role: Role.ADMIN}},
    update:{},
    create:{userId: admin.id,siteId: HaNoi.id, role: Role.ADMIN},
  });
  console.log('users:', await prisma.user.count());
}
main().catch((e)=> {
    console.error(e);
    process.exitCode = 1;
}) .finally(()=>prisma.$disconnect());
