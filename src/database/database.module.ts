import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PosgresTypeOrmConfigService } from './postgres-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PosgresTypeOrmConfigService,
    }),
  ],
})
export class DatabaseModule {}
