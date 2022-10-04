import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from '../../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';
import { ProductService } from '../service/product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 전체 조회
  @ApiOperation({ summary: '상품 전체 조회' })
  @Get()
  getAllProduct() {
    return 'all product';
  }

  // 상품 등록
  @ApiOperation({ summary: '상품 등록' })
  @Post()
  createProduct() {
    return 'create product';
  }

  // 상품 상세
  @ApiOperation({ summary: '상품 상세 조회' })
  @Get(':id')
  getOneProduct(@Param('id') param) {
    console.log('상품 상세 id', param);
    return 'one Product';
  }

  // 상품 수정
  @ApiOperation({ summary: '상품 부분 수정' })
  @Put(':id')
  updateProduct(@Param('id') param) {
    console.log('상품 수정 id', param);
    return 'update product';
  }

  // 상품 전체 수정
  @ApiOperation({ summary: '상품 전체 수정' })
  @Patch(':id')
  updatePartialProduct() {
    return 'update partial product';
  }

  // 상품 삭제
  @ApiOperation({ summary: '상품 삭제' })
  @Delete(':id')
  deleteProduct(@Param('id') param) {
    return 'delete product';
  }
}
