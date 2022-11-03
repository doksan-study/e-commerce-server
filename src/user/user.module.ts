import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './infra/user.repository';
import { AuthModule } from '../auth/auth.module';
import { User, UserSchema } from './user.schema';
import { Like, LikeSchema } from '../like/like.schema';
import { Review, ReviewSchema } from 'src/review/review.schema';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      {
        name: Review.name,
        schema: ReviewSchema,
      },
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
