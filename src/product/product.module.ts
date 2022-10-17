import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './controller/product.controller';
import { productRepository } from './infra/product.repository';
import { Product, ProductSchema } from './product.schema';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, productRepository],
  exports: [ProductService, productRepository],
})
export class ProductModule {}
