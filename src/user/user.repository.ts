import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from './dto/user.request.dto';
import { User } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // 이메일 중복 체크
  async existByEmail(email: string) {
    const result = await this.userModel.exists({ email });
    return result;
  }

  // 닉네임 중복 체크
  async existByNickname(nickname: string) {
    const result = await this.userModel.exists({ nickname });
    return result;
  }

  // 핸드폰 번호 중복 체크
  async existByPhone(phone: string) {
    const result = await this.userModel.exists({ phone });
    return result;
  }

  // 유저 회원가입
  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }
}
