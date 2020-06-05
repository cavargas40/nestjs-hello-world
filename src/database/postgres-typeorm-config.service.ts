import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PosgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      database: this.configService.get<string>('database.name'),
      username: this.configService.get<string>('database.user'),
      password: this.configService.get<string>('database.password'),
      entities: this.configService.get<Array<string>>('orm.entitiesPath'),
      synchronize: this.configService.get<boolean>('orm.synchronize'),
    };
  }
}
