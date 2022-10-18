import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Product extends Document {
  // 카테고리
  // 이름
  @ApiProperty({
    example: '상품 이름',
    description: 'name',
    required: true,
  })
  @Prop({
    require: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  // 설명
  @ApiProperty({
    example: '상품 설명',
    description: 'description',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  // 가격
  @ApiProperty({
    example: '상품 가격',
    description: 'price',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  // 썸네일
  // 옵션
  // 리뷰
}

export const _ProductSchema = SchemaFactory.createForClass(Product);

// Virtual field

export const ProductSchema = _ProductSchema;
