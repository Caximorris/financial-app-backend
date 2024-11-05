import { DataSource } from 'typeorm';
import { User } from '../modules/user/user.entity';
import { Transaction } from '../modules/transaction/transaction.entity';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Transaction],
  subscribers: [],
  migrations: [],
});
