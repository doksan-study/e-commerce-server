import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { User } from '../../user/user.schema';
import { UserRepository } from '../../user/infra/user.repository';
import { LikeCreateDto } from '../dto/like.create.dto';
import { Like } from '../like.schema';
import { Product } from '../../product/product.schema';

@Injectable()
export class LikeRepository {
  constructor(
    @InjectModel(Like.name) private readonly likeModel: Model<Like>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  //** 찜한 유저의 상품 찾기 */
  async findLikeProduct(productId) {
    return '나와';
  }

  //** 찜한 유저 찾기 */
  async findUserLikeProduct(userId) {
    const newId = new mongoose.Types.ObjectId(userId);

    const result = await this.likeModel.find({
      user: newId,
    });

    // const result = findLike.map((item) => item.product);
    return result;
  }

  //** 찜하기 등록 */
  async create(like: LikeCreateDto): Promise<Like> {
    return await this.likeModel.create(like);
  }

  //** 같은 찜한 상품 찾기 */
  async existLikeProduct(like: LikeCreateDto): Promise<Like> {
    return await this.likeModel.findOne(like);
  }
}
