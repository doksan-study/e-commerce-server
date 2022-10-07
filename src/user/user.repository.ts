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

  // 유저 로그아웃
  // async logOut() {
  //   // return await this.userModel
  // }

  // 유저 전체 찾기
  async findAllUser() {
    return await this.userModel.find();
  }

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

  // 이메일을 통한 유저 찾기
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  // 패스워드를 제외하고 유저 찾기
  async findUserByIdWithoutPassword(userId: string): Promise<User | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }
}
