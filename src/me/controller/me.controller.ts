import { JwtAuthGuard } from '@auth/jwt/jwt.guard';
import { CurrentUser } from '@common/decorators/user.decorator';
import { HttpExceptionFilter } from '@common/exceptions/http-exception.filter';
import { SuccessInterceptor } from '@common/interceptors/success.interceptor';
import {
  Controller,
  Get,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../auth/service/auth.service';
import { UserService } from '../../user/service/user.service';

@ApiTags('me')
@Controller('me')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class MeController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  //** 내 정보 조회 */
  @ApiOperation({ summary: '내 정보 조회' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getMyInfo(@CurrentUser() user) {
    return user.readOnlyData;
  }
}
