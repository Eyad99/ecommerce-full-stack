import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/db';
import { neon } from '@neondatabase/serverless';

export async function GET() {
	try {
		// const db = await createConnection();
		// const sql = 'SELECT * FROM products';
		// const [products] = await db.query(sql);
		const sql = neon(process.env.DATABASE_URL as string);
		const products = await sql `SELECT * FROM products`;
 		return NextResponse.json({ data: products, statusCode: 200, message: "Success" });
	} catch (err) {
		const response = {
			error: (err as Error).message,
		};
		return NextResponse.json(response, { status: 500 });
	}
}

export async function POST(request: Request) {
	try {
		const db = await createConnection();
		const body = await request.json();
		const { name, price } = body;

		if (!name || !price) {
			return NextResponse.json({ error: 'Name and price are required' }, { status: 400 });
		}

		const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
		const [result] = await db.query(sql, [name, price]);

		return NextResponse.json({ message: 'Product created successfully', productId: result.insertId }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ error: (err as Error).message }, { status: 500 });
	}
}
