import { mysqlTable } from 'drizzle-orm/mysql-core';
import * as t from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
	id: t.int('id').primaryKey().autoincrement(),
	name: t.varchar('name', { length: 256 }),
	price: t.varchar('price', { length: 256 }),
});
