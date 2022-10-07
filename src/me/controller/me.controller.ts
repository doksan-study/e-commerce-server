import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../auth/service/auth.service';
import { UserService } from '../../user/service/user.service';

@ApiTags('me')
@Controller('me')
export class MeController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  //** 내 정보 조회 */
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getMyInfo() {
    return '내 정보 조회';
  }
}
