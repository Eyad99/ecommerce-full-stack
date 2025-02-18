import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	dialect: 'mysql',
	schema: './lib/schema',
	out: './drizzle',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
