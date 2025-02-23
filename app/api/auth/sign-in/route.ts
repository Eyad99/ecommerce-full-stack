import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

async function doesEmailExist(email: string): Promise<boolean> {
	const result = await db
		.select({
			count: sql<number>`count(*)`,
		})
		.from(users)
		.where(eq(users.email, email));

	return result[0].count > 0;
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email, password, role } = body;
		if (!email || !password || !role) {
			return NextResponse.json({ data: null, statusCode: 400, message: 'Password and email are required.' }, { status: 400 });
		}
		const exists = await doesEmailExist(email);
		if (exists) {
		} else {
			await db.insert(users).values({ password, email, role });
		}

		return NextResponse.json({ data: { password, email }, statusCode: 201, message: 'User created successfully.' }, { status: 201 });
	} catch (err) {
		const response = {
			error: (err as Error).message,
		};
		return NextResponse.json({ data: null, statusCode: 500, message: response });
	}
}
