import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Review extends Document {
  // 리뷰 작성한 유저
  @ApiProperty({
    description: '리뷰 작성 유저',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'users',
  })
  @IsNotEmpty()
  user: Types.ObjectId;

  // 리뷰 작성할 상품
  @ApiProperty({
    description: '리뷰 작성할 상품',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'products',
  })
  @IsNotEmpty()
  product: Types.ObjectId;

  // 리뷰 내용
  @ApiProperty({
    example: '리뷰 내용',
    description: 'content',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  // 별점
  @ApiProperty({
    example: '리뷰 점수',
    description: 'rating',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
