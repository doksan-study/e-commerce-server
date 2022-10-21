import {
  Controller,
  Get,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from '../../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';
import { CartService } from '../service/cart.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt/jwt.guard';

@ApiTags('04. 장바구니 관련')
@Controller('cart')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({
    summary: '장바구니 보기',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getCart() {
    return '장바구니 보기';
  }

  @ApiOperation({
    summary: '장바구니 담기',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async postCart() {
    return '장바구니 담기';
  }

  @ApiOperation({
    summary: '장바구니에서 빼기',
  })
  @UseGuards(JwtAuthGuard)
  @Put()
  async CancelCart() {
    return '장바구니에서 빼기';
  }
}
