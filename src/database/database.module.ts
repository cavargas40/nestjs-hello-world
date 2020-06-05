import { Module, Post } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PosgresTypeOrmConfigService } from './postgres-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PosgresTypeOrmConfigService,
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('database.host', 'localhost'),
    //     port: configService.get<number>('database.port', 5432),
    //     database: configService.get<string>('database.name', 'locations'),
    //     username: configService.get<string>('database.user', 'app'),
    //     password: configService.get<string>('database.password', 'app'),
    //     autoLoadEntities: true,
    //     synchronize: configService.get<boolean>('orm.synchronize', true),
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
})
export class DatabaseModule {}
