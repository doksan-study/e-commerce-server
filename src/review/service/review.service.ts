import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductRepository } from 'src/product/infra/product.repository';
import { UserRepository } from 'src/user/infra/user.repository';
import { ReviewRepository } from '../infra/review.repository';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly userRepository: UserRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  //** 리뷰 작성 */
  async createReview(userId, body) {
    // 유저 id로 리뷰 작성 유저 유효성 검사
    // body로 리뷰 작성할 작품, 내용, 별점을 보낸다.

    const { product, content, rating } = body;

    //** 유저 및 상품 유효성 검사 */
    const validateUser = await this.userRepository.findUserDetail(userId);
    const validateProduct = await this.productRepository.findProductDetail(
      product,
    );

    if (!validateUser || !validateProduct) {
      throw new UnauthorizedException('해당하는 유저 또는 상품이 없습니다!');
    }

    //** 같은 상품에 리뷰를 달았는지 확인 */
    const validateReview = await this.reviewRepository.existReview({
      user: validateUser?._id,
      product: validateProduct?._id,
    });

    if (validateReview) {
      throw new UnauthorizedException('이미 리뷰를 단 상품입니다.');
    }

    //** 리뷰 작성 */
    const createReview = await this.reviewRepository.create({
      user: validateUser._id,
      product: validateProduct._id,
      content,
      rating,
    });

    return createReview;
  }

  //** 리뷰 삭제 */
}
