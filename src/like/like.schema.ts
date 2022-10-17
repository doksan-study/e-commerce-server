import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Like extends Document {
  @ApiProperty({
    description: '찜한 유저 id',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'users',
  })
  @IsNotEmpty()
  user: Types.ObjectId;

  @ApiProperty({
    description: '찜한 상품 id',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'products',
  })
  @IsNotEmpty()
  product: Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
