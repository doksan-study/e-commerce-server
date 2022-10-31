import { Module } from '@nestjs/common';
import { ProductCategoryController } from './controller/product-category.controller';
import { ProductCategoryService } from './service/product-category.service';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
