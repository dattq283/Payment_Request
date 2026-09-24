import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('auth')
@ApiTags("Xác thực")
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }
}
