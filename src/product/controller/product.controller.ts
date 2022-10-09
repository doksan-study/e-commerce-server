import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ProductService } from '../service/product.service';

@ApiTags('product')
@Controller('product')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //** 상품 전체 조회 */

  //** 상품 상세 조회 */

  //**  */
}
