import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
const LOGIN_FAIL = 'Email hoặc mật khẩu không đúng!';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async login(dto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      select: { id: true, passwordHash: true, isActive: true },
    });
    if (!user || !user.isActive) {
      throw new UnauthorizedException(LOGIN_FAIL);
    }
    const isValidPassword = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isValidPassword) {
        throw new UnauthorizedException(LOGIN_FAIL);
    }
    const accessToken = await this.jwt.signAsync({sub: user.id});
    return {accessToken}
  }
}
