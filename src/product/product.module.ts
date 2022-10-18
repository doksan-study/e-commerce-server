import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Like, LikeSchema } from '../like/like.schema';
import { ProductController } from './controller/product.controller';
import { ProductRepository } from './infra/product.repository';
import { Product, ProductSchema } from './product.schema';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      {
        name: Like.name,
        schema: LikeSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService, ProductRepository],
})
export class ProductModule {}
