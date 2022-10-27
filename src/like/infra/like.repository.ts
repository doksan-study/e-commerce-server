import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { User } from '../../user/user.schema';
import { UserRepository } from '../../user/infra/user.repository';
import { LikeCreateDto } from '../dto/like.create.dto';
import { Like } from '../like.schema';
import { Product } from '../../product/product.schema';
import { LikeModelDto } from '../dto/like.model.dto';

@Injectable()
export class LikeRepository {
  constructor(
    @InjectModel(Like.name) private readonly likeModel: Model<Like>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  //** 찜하기 해제 */
  async cancelLikeProduct(body) {
    try {
      const result = await this.likeModel.findOneAndDelete(body);
      return result;
    } catch (error) {
      return;
    }
  }

  //** 찜한 유저의 상품 찾기 */
  async findLikeProduct(productId) {
    const result = await this.productModel.find({
      _id: { $in: productId },
    });

    return result;
  }

  //** 찜한 유저 찾기 */
  async findUserLikeProduct(userId: any) {
    // const newId = new mongoose.Types.ObjectId(userId);

    const result = await this.likeModel.find({
      user: userId,
    });

    // const result = findLike.map((item) => item.product);
    return result;
  }

  //** 찜하기 등록 */
  async create(like: LikeModelDto): Promise<Like> {
    return await this.likeModel.create(like);
  }

  //** 같은 찜한 상품 찾기 */
  async existLikeProduct(like: LikeModelDto): Promise<Like> {
    return await this.likeModel.findOne(like);
  }
}
