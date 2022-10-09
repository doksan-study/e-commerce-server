import { PickType } from '@nestjs/swagger';
import { Product } from '../product.schema';

export class ProductRequestDto extends PickType(Product, [
  'name',
  'description',
  'price',
] as const) {}
