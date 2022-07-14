import { DB_PROVIDER } from '~/constants';
import { Pool } from 'pg';

export const databaseProviders = {
  provide: DB_PROVIDER,
  useValue: new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nestauth',
    password: 'hungn@12345',
    port: 5432,
  }),
};
