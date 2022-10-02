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
import { UserRequestDto } from './dto/user.request.dto';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 전체 조회
  @Get()
  getAllUser() {
    return '유저 전체 조회';
  }

  // 유저 상세
  @Get(':id')
  getCurrentUser() {
    return '유저 상세 조회';
  }

  // 유저 등록(회원가입)
  @Post('signup')
  async signUp(@Body() body: UserRequestDto) {
    console.log('body: ', body);
    // return '회원 가입';
    return await this.userService.signUp(body);
  }

  // 유저 로그인
  @Post('login')
  login() {
    return '로그인';
  }

  // 로그아웃
  @Post('logout')
  logOut() {
    return '로그아웃';
  }

  // 유저 수정
  @Patch()
  updateUser() {
    return '유저 수정';
  }

  // 유저 삭제
  @Delete()
  deleteUser() {
    return '유저 삭제';
  }
}
