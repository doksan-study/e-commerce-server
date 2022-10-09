import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UseFilters,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { AuthService } from 'src/auth/service/auth.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UserRequestDto } from '../dto/user.request.dto';
import { UserService } from '../service/user.service';

@ApiTags('user')
@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  //** 유저 전체 조회 */
  @ApiOperation({ summary: '유저 전체 조회' })
  @Get()
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  //** 유저 상세 */
  @ApiOperation({ summary: '유저 상세' })
  @Get(':id')
  async getAllDetail() {
    return '유저 상세';
  }

  //** 유저 회원가입 */
  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async signUp(@Body() body: UserRequestDto) {
    return await this.userService.signUp(body);
  }

  //** 유저 로그인 */
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }
  //** 유저 수정 */
}
