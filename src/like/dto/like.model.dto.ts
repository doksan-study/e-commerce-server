import { PickType } from '@nestjs/swagger';
import { Like } from '../like.schema';

export class LikeModelDto extends PickType(Like, [
  'user',
  'product',
] as const) {}
