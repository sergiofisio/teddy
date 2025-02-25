import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  autoLoadEntities: true,
  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: true,
  logging: true,
};
