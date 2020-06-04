import { registerAs } from '@nestjs/config';

export default registerAs('orm', () => ({
  entitiesPath: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}));
