import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import databaseConfig from '../config/database.config';
import ormConfig from '../config/orm.config';

@Module({
  imports: [
    LocationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // The value assigned to the load property is an array, allowing you to load multiple configuration files (e.g. load: [databaseConfig, authConfig])
      load: [databaseConfig, ormConfig],
    }),
    DatabaseModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
