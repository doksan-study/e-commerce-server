import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/product/product.schema';
import { User } from 'src/user/user.schema';
import { Review } from '../review.schema';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  //** 같은 상품에 리뷰를 달았는지 찾기 */
  async existReview(review: any) {
    return await this.reviewModel.findOne(review);
  }

  //** 리뷰 작성하기 */
  async create(review: any) {
    return await this.reviewModel.create(review);
  }
}
