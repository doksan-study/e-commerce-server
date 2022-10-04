import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserRequestDto {
  // 이메일
  @ApiProperty({
    example: 'test11@gmail.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // 비밀번호
  @IsNotEmpty()
  @IsString()
  password: string;

  // 이름
  @IsNotEmpty()
  @IsString()
  name: string;

  // 닉네임
  @IsNotEmpty()
  @IsString()
  nickname: string;

  // 핸드폰 번호
  @IsNotEmpty()
  @IsString()
  phone: string;

  // 프로필 이미지
  // @IsString()
  // profile: string;

  // 권한
  @IsNotEmpty()
  @IsNumber()
  authLevel: number;
}
