import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '../dto/user.request.dto';
import { UserRepository } from '../infra/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  //** 유저 상세 */
  async getUserDetail(id: string) {
    const userDetail = await this.userRepository.findUserDetail(id);
    return userDetail;
  }

  //** 유저 전체 조회 */
  async getAllUser() {
    const allUser = await this.userRepository.findAllUser();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }

  //** 유저 회원가입 */
  async signUp(body: UserRequestDto) {
    const { email, password, name, phone, authLevel } = body;

    // 해당 email, 핸드폰 번호 있는 지 검사
    const isEmailExist = await this.userRepository.existByEmail(email);
    const isPhoneExist = await this.userRepository.existByPhone(phone);

    if (isEmailExist) {
      throw new UnauthorizedException('해당하는 유저 이메일이 존재합니다.');
    }

    if (isPhoneExist) {
      throw new UnauthorizedException('같은 번호로 가입한 아이디가 있습니다.');
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
      name,
      phone,
      authLevel,
    });

    return user.readOnlyData;
  }
}
