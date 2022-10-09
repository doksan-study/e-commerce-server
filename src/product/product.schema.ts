import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Product extends Document {
  // 이름
  @Prop({
    required: true,
    // unique: true
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  // 썸네일
  @Prop()
  @IsString()
  thumbnail: string;

  // 설명
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  // 가격
  @Prop({
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  cost: number;
  // 상태(노출 상태 여부)
}

export const ProductSchema = SchemaFactory.createForClass(Product);
