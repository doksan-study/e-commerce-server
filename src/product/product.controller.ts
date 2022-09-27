import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 상품 전체 조회
  @Get()
  getAllProduct() {
    return 'all product';
  }

  // 상품 등록
  @Post()
  createProduct() {
    return 'create product';
  }

  // 상품 상세
  @Get(':id')
  getOneProduct() {
    return 'one Product';
  }

  // 상품 수정
  @Put(':id')
  updateProduct() {
    return 'update product';
  }

  // 상품 전체 수정
  @Patch(':id')
  updatePartialProduct() {
    return 'update partial product';
  }

  // 상품 삭제
  @Delete(':id')
  deleteProduct() {
    return 'delete product';
  }
}
