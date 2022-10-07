import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';
import { LoginRequestDto } from '../dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  //** 로그인 */
  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;

    // 이메일 체크
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    // 비밀번호 체크
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    // payload: base64 인코딩 데이터(key-value)
    const payload = { email: email, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  // async logOut() {
  //   return response.cookie('', '')
  // }
}
