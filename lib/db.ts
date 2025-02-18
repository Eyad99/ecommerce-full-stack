import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';

// const poolConnection  = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//   })
//   export const db = drizzle(connection, { schema, mode: 'default' })


export const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });
