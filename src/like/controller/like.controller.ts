import {
  Controller,
  Delete,
  Get,
  Post,
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

@ApiTags('03. 찜하기 관련')
@Controller('like')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class LikeController {
  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  @ApiOperation({
    summary: '찜한 상품 보기',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getLikeProduct() {
    return '찜한 상품 보기';
  }

  @ApiOperation({
    summary: '찜하기',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async LikeProduct() {
    return '찜한 상품 보기';
  }

  @ApiOperation({
    summary: '찜한 상품 해제',
  })
  @UseGuards(JwtAuthGuard)
  @Delete()
  async CancelLikeProduct() {
    return '찜한 상품 해제';
  }
}
