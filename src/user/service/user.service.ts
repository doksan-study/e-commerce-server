import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from '../dto/user.request.dto';
import { User } from '../user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signUp(body: UserRequestDto) {
    const { email, password, name, nickname, phone, authLevel } = body;

    // 해당 email, 닉네임, 핸드폰 번호이 있는지 검사
    const isEmailExist = await this.userModel.exists({ email });
    const isNicknameExist = await this.userModel.exists({ nickname });
    const isPhoneExist = await this.userModel.exists({ phone });

    if (isEmailExist) {
      throw new UnauthorizedException(
        '해당하는 유저 이메일이 이미 존재합니다.',
      );
    }

    if (isNicknameExist) {
      throw new UnauthorizedException('해당 닉네임은 이미 사용 중 입니다.');
    }

    if (isPhoneExist) {
      throw new UnauthorizedException('이미 가입한 아이디가 있습니다.');
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      name,
      nickname,
      phone,
      authLevel,
    });

    return user.readOnlyData;
  }
}
