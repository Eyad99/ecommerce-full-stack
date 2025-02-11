import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const dynamic = 'force-dynamic'; // Force dynamic rendering
const databaseUrl = process.env.DATABASE_URL as string;

// export async function GET() {
// 	try {
// 		const sql = neon(process.env.DATABASE_URL as string);
// 		const products = await sql`SELECT * FROM products`;
// 		return NextResponse.json({ data: products, statusCode: 200, message: 'Success' });
// 	} catch (err) {
// 		const response = {
// 			error: (err as Error).message,
// 		};
// 		return NextResponse.json(response, { status: 500 });
// 	}
// }

export async function GET() {
	try {
		console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debugging line

		if (!process.env.DATABASE_URL) {
			throw new Error('DATABASE_URL is not defined');
		}

		const sql = neon(databaseUrl);
		const products = await sql`SELECT * FROM products`;
		return NextResponse.json({ data: products, statusCode: 200, message: 'Success' });
	} catch (err) {
		return NextResponse.json({ error: (err as Error).message }, { status: 500 });
	}
}