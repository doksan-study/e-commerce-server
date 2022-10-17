import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { LikeController } from './controller/like.controller';
import { LikeRepository } from './infra/like.repository';
import { Like, LikeSchema } from './like.schema';
import { LikeService } from './service/like.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
    UserModule,
    ProductModule,
  ],
  controllers: [LikeController],
  providers: [LikeService, LikeRepository],
  exports: [LikeService, LikeRepository],
})
export class LikeModule {}
