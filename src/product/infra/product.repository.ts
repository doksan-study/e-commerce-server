import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Like } from 'src/like/like.schema';
import { Review } from '../../review/review.schema';
import { ProductRequestDto } from '../dto/product.request.dto';
import { Product } from '../product.schema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly ProductModel: Model<Product>,
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
    @InjectModel(Like.name) private readonly likeModel: Model<Like>,
  ) {}

  // 상품 id로 해당 상품 찾기
  async findProductDetail(id: string | Types.ObjectId) {
    try {
      const result = await this.ProductModel.findOne({ _id: id });
      console.log('product: ', result);
      return result;
    } catch (error) {
      return undefined;
    }
  }

  // 상품 전체 찾기
  async findAllProduct() {
    const product = await this.ProductModel.find();

    return product;
  }

  // 상품 등록
  async create(product: ProductRequestDto): Promise<Product> {
    return await this.ProductModel.create(product);
  }
}
