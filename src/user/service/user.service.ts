import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from '../dto/user.request.dto';
import { User } from '../user.schema';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(body: UserRequestDto) {
    const { email, password, name, nickname, phone, authLevel } = body;

    // 해당 email, 닉네임, 핸드폰 번호이 있는지 검사
    const isEmailExist = await this.userRepository.existByEmail(email);
    const isNicknameExist = await this.userRepository.existByNickname(nickname);
    const isPhoneExist = await this.userRepository.existByPhone(phone);

    if (isEmailExist) {
      throw new UnauthorizedException(
        '해당하는 유저 이메일이 이미 존재합니다.',
      );
    }

    if (isNicknameExist) {
      throw new UnauthorizedException('해당 닉네임은 이미 사용 중 입니다.');
    }

    if (isPhoneExist) {
      throw new UnauthorizedException(
        '이미 같은 휴대폰 번호로 가입한 아이디가 있습니다.',
      );
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
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
