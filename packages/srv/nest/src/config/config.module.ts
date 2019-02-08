import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

const configService = {
  provide: ConfigService,
  useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
};

@Module({
  providers: [configService],
  exports: [configService],
})
export class ConfigModule {}
