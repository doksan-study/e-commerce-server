import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../user.schema';

export class UserRequestDto extends PickType(User, [
  'email',
  'password',
  'name',
  'nickname',
  'phone',
  'authLevel',
] as const) {}
