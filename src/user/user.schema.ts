import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  // 이메일
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // 비밀번호
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  // 이름
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // 닉네임
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  nickname: string;

  // 핸드폰 번호
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  // 프로필 이미지
  @Prop()
  @IsString()
  profile: string;

  // 주소
  @Prop()
  @IsString()
  address: string;

  // 성별
  @Prop()
  @IsString()
  gender: string;

  // 나이
  @Prop()
  @IsNumber()
  age: number;

  // 권한
  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  authLevel: number;

  // 상태(탈퇴 여부)
  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  status: number;
}
