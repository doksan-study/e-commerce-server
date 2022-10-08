import { PickType } from '@nestjs/swagger';
import { User } from '@user/user.schema';

export class UserUpdateDto extends PickType(User, [
  'id',
  'email',
  'name',
  'nickname',
  'phone',
  'authLevel',
] as const) {}
