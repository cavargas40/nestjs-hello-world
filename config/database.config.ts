import { registerAs } from '@nestjs/config';

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

export default registerAs('database', () => ({
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT, 10) || 5432,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
}));
