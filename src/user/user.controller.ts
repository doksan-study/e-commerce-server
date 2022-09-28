import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 전체 조회

  // 유저 상세

  // 유저 등록(회원가입)

  // 유저 로그인

  // 유저 수정

  // 유저 삭제
}
