import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  // 이메일
  @ApiProperty({
    example: 'test11@gmail.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // 비밀번호
  @ApiProperty({
    example: 'test11',
    description: 'password',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  // 이름
  @ApiProperty({
    example: 'test11',
    description: 'name',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // 닉네임
  @ApiProperty({
    example: '테스트11',
    description: 'nickname',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  nickname: string;

  // 핸드폰 번호
  @ApiProperty({
    example: '01012345678',
    description: 'phone',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  // 프로필 이미지
  @ApiProperty({
    example: '사진',
    description: 'profile',
  })
  @Prop()
  @IsString()
  profile: string;

  // 권한
  @ApiProperty({
    example: 0,
    description: 'authLevel',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  authLevel: number;

  // 상태(탈퇴 여부)
  // @Prop({ required: true })
  // @IsNotEmpty()
  // @IsNumber()
  // status: number;

  // 주소
  // FIXME: 사용자 입장에서는 있어도 안 넣을 듯?
  // 긍데 스토어니까 넣어야 할 듯
  @ApiProperty({
    example: '구냥 daumPost로 보내셈',
    description: 'address',
    required: true,
  })
  @Prop()
  @IsString()
  address: string;

  // 성별
  // FIXME: 굳이 넣어야 돼?
  // @Prop()
  // @IsString()
  // gender: string;

  // 나이
  // FIXME: 굳이 넣어야 돼?
  // @Prop()
  // @IsNumber()
  // age: number;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    nickname: string;
    phone: string;
    authLevel: number;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);

// Virtual Field 생성
// 회원가입시 보여주는 데이터를 한 번 더 가공해서
// 가공한 데이터를 보낸다.

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    nickname: this.nickname,
    phone: this.phone,
    authLevel: this.authLevel,
    // createdAt: this.createdAt,
  };
});
