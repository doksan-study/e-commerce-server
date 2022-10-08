import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserRequestDto } from '../dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  //** 유저 전체조회 */
  async getAllUser() {
    const allUser = await this.userRepository.findAllUser();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }

  //** 유저 상세 */
  async getUserDetail(userId: string) {
    const userDetail = await this.userRepository.findUserDetail(userId);
    return userDetail;
  }

  //** 유저 회원가입 */
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

  //** 유저 수정 */
  // FIXME: 타입 수정
  async updateUser(body) {
    const { id, email, name, nickname, phone, authLevel } = body;

    // 해당 유저 찾기
    const isUserExist = await this.userRepository.existByUserId(id);

    // 해당 email, 닉네임, 핸드폰 번호이 있는지 검사
    const isEmailExist = await this.userRepository.existByEmail(email);
    const isNicknameExist = await this.userRepository.existByNickname(nickname);
    const isPhoneExist = await this.userRepository.existByPhone(phone);

    if (!isUserExist) {
      throw new UnauthorizedException('해당 유저가 존재하지 않습니다.');
    }

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

    // const updateUser = await this.userRepository.update({
    //   id,
    //   email,
    //   name,
    //   nickname,
    //   phone,
    //   authLevel,
    // });

    return '유저 정보 수정';
    // return updateUser;

    // return this.userRepository.updateUser(user);
  }

  //** 유저 탈퇴 */
  async deleteUser() {
    return '유저 탈퇴';
  }
}
