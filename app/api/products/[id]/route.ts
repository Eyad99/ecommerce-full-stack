import { NextResponse, NextRequest } from 'next/server';
import { createConnection } from '@/lib/db';

export async function GET({ params }: { params: { id: string } }) {
	try {
		const db = await createConnection();
		const [product] = await db.query('SELECT * FROM products WHERE id = ?', [params.id]);
		if (product.length === 0) {
			return NextResponse.json({ error: 'Product not found' }, { status: 404 });
		}
		return NextResponse.json(product[0]);
	} catch (err) {
		const response = {
			error: (err as Error).message,
		};
		return NextResponse.json(response, { status: 500 });
	}
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
	try {
		const db = await createConnection();
		const body = await request.json();
		const { name, price } = body;

		if (!name || !price) {
			return NextResponse.json({ error: 'Name and price are required' }, { status: 400 });
		}

		const sql = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
		const [result] = await db.query(sql, [name, price, params.id]);

		if (result.affectedRows === 0) {
			return NextResponse.json({ error: 'Product not found' }, { status: 404 });
		}

		return NextResponse.json({ message: 'Product updated successfully' }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: (err as Error).message }, { status: 500 });
	}
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
	try {
		const db = await createConnection();
		const sql = 'DELETE FROM products WHERE id = ?';
		const [result] = await db.query(sql, [params.id]);

		if (result.affectedRows === 0) {
			return NextResponse.json({ error: 'Product not found' }, { status: 404 });
		}

		return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: (err as Error).message }, { status: 500 });
	}
}
