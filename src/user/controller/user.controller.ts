import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UserRequestDto } from '../dto/user.request.dto';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReadOnlyUserDto } from '../dto/user.dto';

@ApiTags('user')
@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  //** 유저 전체 조회 * /
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '유저 전체 조회 요청 성공',
  })
  @ApiOperation({ summary: '유저 조회' })
  @Get()
  getAllUser() {
    return '유저 전체 조회';
  }

  //** 유저 상세 */
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '유저 상세 요청 성공',
  })
  @ApiOperation({ summary: '유저 상세' })
  @Get(':id')
  getCurrentUser() {
    return '유저 상세 조회';
  }

  //** 유저 등록(회원가입) */
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
    console.log('body: ', body);
    return await this.userService.signUp(body);
  }

  //** 유저 로그인 */
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '로그인 요청 성공',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login() {
    return '로그인';
  }

  //** 로그아웃 */
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '로그아웃 요청 성공',
  })
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return '로그아웃';
  }

  // 유저 수정
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '유저 정보 수정 요청 성공',
  })
  @ApiOperation({ summary: '유저 정보 수정' })
  @Patch()
  updateUser() {
    return '유저 수정';
  }

  // 유저 삭제
  @ApiResponse({
    status: 500,
    description: 'Server Error',
  })
  @ApiResponse({
    status: 200,
    description: '회원 탈퇴 요청 성공',
  })
  @ApiOperation({ summary: '유저 탈퇴' })
  @Delete()
  deleteUser() {
    return '유저 삭제';
  }
}
