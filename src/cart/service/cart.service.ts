import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductRepository } from 'src/product/infra/product.repository';
import { UserRepository } from 'src/user/infra/user.repository';
import { CartCreateDto } from '../dto/cart.create.dto';
import { CartRepository } from '../infra/cart.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly userRepository: UserRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  //** 장바구니 보기 */
  async findCart(userId: any) {
    // 보내는 유저 아이디를 통해 장바구니 확인하기
    const findMyCart = await this.cartRepository.findMyCart(userId);

    return findMyCart;
  }

  //** 장바구니 담기 */
  async createCart(userId, body) {
    const { product, count } = body;

    //** 상품 유효성 검사 */
    const validationProduct = await this.productRepository.findProductDetail(
      product,
    );

    if (!validationProduct) {
      throw new UnauthorizedException('해당하는 상품이 없습니다.');
    }

    //** 같은 상품이 들어 있는 지 검사 */
    const validationCart = await this.cartRepository.EqualCart({
      userId,
      product,
    });

    if (validationCart) {
      throw new UnauthorizedException('이미 같은 상품이 들어 있습니다.');
    }

    const createCart = await this.cartRepository.create({
      user: userId,
      product: validationProduct._id,
      count: count,
    });

    return createCart;
  }
}
