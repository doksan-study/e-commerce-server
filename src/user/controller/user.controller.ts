import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UserRequestDto } from '../dto/user.request.dto';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReadOnlyUserDto } from '../dto/user.dto';
import { AuthService } from '../../auth/service/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Response } from 'express';

@ApiTags('user')
@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  //** 유저 전체 조회 * /
  @ApiOperation({ summary: '유저 조회' })
  @Get()
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  @ApiOperation({ summary: '내 정보 조회' })
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyInfo(@CurrentUser() user) {
    return user.readOnlyData;
  }

  //** 유저 상세 */
  @ApiOperation({ summary: '유저 상세' })
  @Get(':id')
  async getUserDetail() {
    return this.userService.getUserDetail();
  }

  //** 유저 회원가입 */
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '회원 가입 요청 성공',
    type: ReadOnlyUserDto,
  })
  @ApiOperation({ summary: '회원 가입' })
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

  //** 로그아웃 */
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logOut() {
    return '유저 로그아웃';
  }

  // 유저 수정
  @ApiOperation({ summary: '유저 정보 수정' })
  @Patch()
  async updateUser() {
    return await this.userService.updateUser();
  }

  // 유저 탈퇴
  @ApiOperation({ summary: '유저 탈퇴' })
  @Delete()
  async deleteUser() {
    return await this.userService.deleteUser();
  }
}
