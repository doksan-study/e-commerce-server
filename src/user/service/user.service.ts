import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infra/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  //** 유저 전체 조회 */
  async getAllUser() {
    const allUser = await this.userRepository.findAllUser();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }
}
