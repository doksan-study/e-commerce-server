import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './service/auth.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
