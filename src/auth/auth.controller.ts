import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';


@Controller('auth')
@ApiTags("Xác thực")
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }
    
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    me(@Req() req: Request){
        return req.user;
    }
}
