import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUserId } from 'src/common/decorators/user.decorator';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ReviewService } from '../service/review.service';

@ApiTags('05. 리뷰 관련')
@Controller('review')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({ summary: '리뷰 작성' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async createReview(@CurrentUserId() userId, @Body() body: any) {
    return await this.reviewService.createReview(userId, body);
  }

  @ApiOperation({ summary: '리뷰 삭제' })
  @Delete(':id')
  async deleteReview(@Param('id') reviewId: any) {
    return `${reviewId} 리뷰를 삭제합니다`;
  }
}
