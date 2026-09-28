import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { AccessService } from '../access/access.service';
import { AuthUser } from './jwt.strategy';

@Controller('auth')
@ApiTags('Xác thực')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly access: AccessService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async me(@Req() req: Request & { user: AuthUser }) {
    const roles = await this.access.getRoles(req.user.id);
    return { ...req.user, roles };
  }
}
