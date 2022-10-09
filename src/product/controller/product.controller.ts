import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ProductRequestDto } from '../dto/product.request.dto';
import { ProductService } from '../service/product.service';

@ApiTags('product')
@Controller('product')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //** 상품 전체 조회 */
  @ApiOperation({ summary: '상품 전체 조회' })
  @Get()
  async getAllProduct() {
    // return '상품 전체 조회';
    return await this.productService.getAllProduct();
  }

  //** 상품 상세 조회 */
  @ApiOperation({ summary: '상품 상세 조회' })
  @Get(':id')
  async getProductDetail(@Param('id') productId: string) {
    console.log('id: ', productId);
    return await this.productService.getProductDetail(productId);
  }

  //** 상품 등록 */
  @ApiOperation({ summary: '상품 등록' })
  @Post()
  async createProduct(@Body() body: ProductRequestDto) {
    return await this.productService.create(body);
  }

  //** 상품 수정 */
}
