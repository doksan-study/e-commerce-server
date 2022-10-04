import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.schema';

export class ReadOnlyUserDto {
  @ApiProperty({
    example: 'test11@gmail.com',
    description: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'test11',
    description: 'password',
    required: true,
  })
  password: string;

  @ApiProperty({
    example: 'name',
    description: '테스트11',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'nickname',
    description: '테스트11',
    required: true,
  })
  nickname: string;

  @ApiProperty({
    example: 'phone',
    description: '01012345678',
    required: true,
  })
  phone: string;

  @ApiProperty({
    example: 'authLevel',
    description: '0',
    required: true,
  })
  authLevel: string;
}
