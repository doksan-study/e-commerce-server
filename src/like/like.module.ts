import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/user.schema';

import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { LikeController } from './controller/like.controller';
import { LikeRepository } from './infra/like.repository';
import { Like, LikeSchema } from './like.schema';
import { LikeService } from './service/like.service';
import { Product, ProductSchema } from '../product/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Like.name, schema: LikeSchema },
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    UserModule,
    ProductModule,
  ],
  controllers: [LikeController],
  providers: [LikeService, LikeRepository],
  exports: [LikeService, LikeRepository],
})
export class LikeModule {}
