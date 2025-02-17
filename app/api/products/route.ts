// curl -X POST http://localost:3000/api/

import { db } from '@/lib/db';
import { products } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const productsList = await db.select().from(products);
		if (productsList.length === 0) {
			return NextResponse.json({ data: [], statusCode: 200, message: 'Product not found' }, { status: 404 });
		}
		return NextResponse.json({ data: productsList, statusCode: 200, message: 'Success' });
	} catch (err) {
		const response = {
			error: (err as Error).message,
		};
		return NextResponse.json({ data: null, statusCode: 500, message: response });
	}
}
