import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cart extends Document {
  //** 유저 */
  @ApiProperty({
    description: '유저 id',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'users',
  })
  @IsNotEmpty()
  user: Types.ObjectId;

  //** 상품 */
  @ApiProperty({
    description: '상품 id',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'products',
  })
  @IsNotEmpty()
  product: Types.ObjectId;

  //** 수량 */
  @ApiProperty({
    description: '수량',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  count: number;
}

export const _CartSchema = SchemaFactory.createForClass(Cart);

// Virtual Field

export const CartSchema = _CartSchema;
