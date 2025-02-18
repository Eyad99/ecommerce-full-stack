import { mysqlTable } from 'drizzle-orm/mysql-core';
import * as t from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
	id: t.int('id').primaryKey().autoincrement(),
	firstName: t.varchar('first_name', { length: 256 }),
	lastName: t.varchar('last_name', { length: 256 }),
 	email: t.varchar('email', { length: 255 }).notNull().unique(),
	password: t.text('password').notNull(),
});
