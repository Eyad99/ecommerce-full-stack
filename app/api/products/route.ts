// import { NextResponse } from 'next/server';
// import { neon } from '@neondatabase/serverless';

// export const dynamic = 'force-dynamic'; // Force dynamic rendering
// const databaseUrl = process.env.DATABASE_URL as string;

// curl -X POST http://localost:3000/api/
// export async function GET() {
// 	try {
// 		const sql = neon(databaseUrl);
// 		const products = await sql`SELECT * FROM products`;
// 		return NextResponse.json({ data: products, statusCode: 200, message: 'Success' });
// 	} catch (err) {
// 		return NextResponse.json({ error: (err as Error).message }, { status: 500 });
// 	}
// }
export const dynamic = 'force-dynamic'; // Force dynamic rendering

import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/db';
export async function GET() {
	try {
		const db = await createConnection();
		const sql = 'SELECT * FROM products';
		const [products] = await db.query(sql);
		if (products.length === 0) {
			return NextResponse.json({ error: 'Product not found' }, { status: 404 });
		}
		return NextResponse.json({ data: products, statusCode: 200, message: 'Success' });
	} catch (err) {
		const response = {
			error: (err as Error).message,
		};
		return NextResponse.json({ data: null, statusCode: 500, message: response });
	}
}
