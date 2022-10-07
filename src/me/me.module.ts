import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from '../auth/auth.module';
import { MeController } from './controller/me.controller';
import { MeService } from './service/me.service';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [MeController],
  providers: [MeService],
})
export class MeModule {}
