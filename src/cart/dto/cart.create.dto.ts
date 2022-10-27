import { PickType } from '@nestjs/swagger';
import { Cart } from '../cart.schema';

export class CartCreateDto extends PickType(Cart, [
  'user',
  'product',
  'count',
] as const) {}
