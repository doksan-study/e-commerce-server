import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from '../../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { LikeCreateDto } from '../dto/like.create.dto';
import { LikeService } from '../service/like.service';
import { CurrentUserId } from '../../common/decorators/user.decorator';

@ApiTags('03. 찜하기 관련')
@Controller('like')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiOperation({
    summary: '찜한 상품 보기',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getLikeProduct(@CurrentUserId() userId) {
    return this.likeService.findLikeProduct(userId);
  }

  @ApiOperation({
    summary: '찜하기',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async LikeProduct(@CurrentUserId() userId, @Body() body: LikeCreateDto) {
    return this.likeService.createLikeProduct(userId, body);
  }

  @ApiOperation({
    summary: '찜한 상품 해제',
  })
  @UseGuards(JwtAuthGuard)
  @Put()
  async CancelLikeProduct(
    @CurrentUserId() userId,
    @Body() body: LikeCreateDto,
  ) {
    return this.likeService.cancelLikeProduct(userId, body);
  }
}
