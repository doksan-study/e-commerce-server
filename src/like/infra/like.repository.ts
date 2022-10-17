import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from '../like.schema';

@Injectable()
export class LikeRepository {
  constructor(
    @InjectModel(Like.name) private readonly LikeModel: Model<Like>,
  ) {}
}
