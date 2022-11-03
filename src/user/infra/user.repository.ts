import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Review } from '../../review/review.schema';
import { UserRequestDto } from '../dto/user.request.dto';
import { User } from '../user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
  ) {}

  // 유저 id로 해당 유저 찾기
  async findUserDetail(id: string | Types.ObjectId) {
    try {
      const result = await this.userModel
        .findOne({ _id: id })
        .select('-password');

      // const userId = new Types.ObjectId(id);

      // const userReview = await this.reviewModel
      //   .find({ user: userId })
      //   .select('content + rating');

      // const user1 = Object.assign(user);

      // const review = { review: userReview };
      // const result = Object.assign(user1, review);

      return result;
    } catch (error) {
      return;
    }
  }

  // 유저 전체 찾기
  async findAllUser() {
    return await this.userModel.find().select('-password');
  }

  // 이메일을 통한 유저 찾기
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  // 회원가입
  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }

  // 이메일 중복 체크
  async existByEmail(email: string) {
    const result = await this.userModel.exists({ email });
    return result;
  }

  // 핸드폰 번호 중복 체크
  async existByPhone(phone: string) {
    const result = await this.userModel.exists({ phone });
    return result;
  }

  // 패스워드를 제외하고 유저 찾기
  async findUserByIdWithoutPassword(userId: string): Promise<User | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }
}
