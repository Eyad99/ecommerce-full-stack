import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/db';

export async function GET() {
	try {
		const db = await createConnection();
		const sql = 'SELECT * FROM products';
		const [products] = await db.query(sql);
		return NextResponse.json(products);
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
