import { buildScope } from './src/access/build-scope';
import { Role } from './src/generated/prisma/client';

console.log(JSON.stringify(buildScope('u1', [{ siteId: 'hn', role: Role.NGUOI_TAO }])));
console.log(JSON.stringify(buildScope('u2', [{ siteId: 'hn', role: Role.TRUONG_PHONG }])));
console.log(JSON.stringify(buildScope('u4', [
  { siteId: 'hn', role: Role.KT_THANH_TOAN },
  { siteId: 'hcm', role: Role.KT_THANH_TOAN },
])));