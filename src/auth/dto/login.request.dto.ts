import { PickType } from '@nestjs/swagger';
import { User } from '../../user/user.schema';

export class LoginRequestDto extends PickType(User, [
  'email',
  'password',
] as const) {}
