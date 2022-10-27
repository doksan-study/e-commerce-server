import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Product } from '../../product/product.schema';
import { User } from '../../user/user.schema';
import { Cart } from '../cart.schema';
import { CartCreateDto } from '../dto/cart.create.dto';

@Injectable()
export class CartRepository {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  //** 내 장바구니 확인하기 */
  async findMyCart(cart) {
    const result = await this.cartModel
      .find()
      .populate('product', '', this.productModel)
      .populate('user', '-password', this.userModel)
      .exec();

    return result;
  }

  //** 장바구니에 같은 상품이 들어있는 지 확인 */
  async EqualCart(cart: any) {
    const createProductId = new Types.ObjectId(cart.product);

    const result = await this.cartModel.findOne({
      user: cart.userId,
      product: createProductId,
    });

    return result;
  }

  //** 장바구니 등록 */
  async create(cart: any): Promise<Cart> {
    console.log('cart: ', cart);
    // return '장바구니 등록';
    return await this.cartModel.create(cart);
  }
}
