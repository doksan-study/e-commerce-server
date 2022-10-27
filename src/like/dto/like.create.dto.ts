import { PickType } from '@nestjs/swagger';
import { Like } from '../like.schema';

export class LikeCreateDto extends PickType(Like, ['product'] as const) {}
