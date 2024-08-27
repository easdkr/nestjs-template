import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from '@libs/common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validate,
    }),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
