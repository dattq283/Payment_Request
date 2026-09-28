import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { AccessService } from '../access/access.service';
import type { AuthUser } from './jwt.strategy';
import { Public } from './public.decorator';

@Controller('auth')
@ApiTags('Xác thực')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly access: AccessService,
  ) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('me')
  @ApiBearerAuth()
  async me(@Req() req: Request & { user: AuthUser }) {
    const roles = await this.access.getRoles(req.user.id);
    return { ...req.user, roles };
  }
}
