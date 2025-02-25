import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Cliente } from 'src/modules/clientes/entities/cliente.entity/cliente.entity';
import { Endereco } from 'src/modules/clientes/entities/endereco.entity/endereco.entity';
import { Telefone } from 'src/modules/clientes/entities/telefone.entity/telefone.entity';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [Cliente, Telefone, Endereco],
  synchronize: true,
  autoLoadEntities: true,
};
