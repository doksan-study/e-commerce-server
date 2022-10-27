import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ProductRepository } from '../../product/infra/product.repository';
import { UserRepository } from '../../user/infra/user.repository';
import { LikeRepository } from '../infra/like.repository';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeRepository,
    private readonly userRepository: UserRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  //** 찜한 상품 보기 */
  async findLikeProduct(userId: any) {
    // 찜한 유저 찾기
    const findUserLikeProduct = await this.likeRepository.findUserLikeProduct(
      userId,
    );

    const productId = findUserLikeProduct.map((item) => item.product);

    // 찜한 유저의 삼품 찾기
    const findLikeProduct = await this.likeRepository.findLikeProduct(
      productId,
    );

    return findLikeProduct;
  }

  //** 찜하기 */
  async createLikeProduct(userId, body: any) {
    const { product } = body;

    //** 유저 및 상품 유효성 검사 */
    const validateUser = await this.userRepository.findUserDetail(userId);
    const validateProduct = await this.productRepository.findProductDetail(
      product,
    );

    if (!validateUser || !validateProduct) {
      throw new UnauthorizedException('해당하는 유저 또는 상품이 없습니다.');
    }

    //** 같은 상품에 찜했는지 검사 */
    const validateLikeProduct = await this.likeRepository.existLikeProduct({
      user: validateUser?._id,
      product: validateProduct._id,
    });

    if (validateLikeProduct) {
      throw new UnauthorizedException('이미 같은 상품에 찜하기를 하셨습니다.');
    }

    // //* 찜하기 등록 */
    const likeProduct = await this.likeRepository.create({
      user: validateUser._id,
      product: validateProduct._id,
    });

    return likeProduct;
  }

  //** 찜하기 해제 */
  async cancelLikeProduct(userId: any, body: any) {
    const { product } = body;

    const validateUser = await this.userRepository.findUserDetail(userId);
    const validateProduct = await this.productRepository.findProductDetail(
      product,
    );

    const cancelLike = await this.likeRepository.cancelLikeProduct({
      user: validateUser._id,
      product: validateProduct._id,
    });

    if (!cancelLike) {
      throw new UnauthorizedException('해당 찜한 상품이 없습니다.');
    }

    return '찜하기 해제 되었습니다.';
  }
}
