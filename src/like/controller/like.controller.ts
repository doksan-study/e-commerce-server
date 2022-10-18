import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from '../../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';
import { UserService } from '../../user/service/user.service';
import { ProductService } from '../../product/service/product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { LikeCreateDto } from '../dto/like.create.dto';
import { LikeService } from '../service/like.service';
import { Types } from 'mongoose';

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
  @Get(':id')
  async getLikeProduct(@Param('id') userId) {
    return this.likeService.findLikeProduct(userId);
  }

  @ApiOperation({
    summary: '찜하기',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async LikeProduct(@Body() body: LikeCreateDto) {
    return this.likeService.createLikeProduct(body);
  }

  @ApiOperation({
    summary: '찜한 상품 해제',
  })
  @UseGuards(JwtAuthGuard)
  @Put()
  async CancelLikeProduct(@Body() body: LikeCreateDto) {
    return this.likeService.cancelLikeProduct(body);
  }
}
