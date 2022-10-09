import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../service/user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //** 유저 전체 조회 */
  @ApiOperation({ summary: '유저 전체 조회' })
  @Get()
  async getAllUser() {
    return await this.userService.getAllUser();
    // return '유저 전체 조회';
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
  async signUp() {
    return '유저 회원가입';
  }

  //** 유저 로그인 */
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login() {
    return '유저 로그인';
  }
  //** 유저 수정 */
}
