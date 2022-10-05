import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../user.schema';

export class ReadOnlyUserDto extends PickType(User, [
  'email',
  'name',
  'nickname',
  'phone',
  'authLevel',
] as const) {
  @ApiProperty({
    example: '633cff1c06f9a6bd8e7cfb49',
    description: 'id',
  })
  id: string;
}
