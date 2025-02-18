import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
	const cookies = req.cookies;
	console.log('cookiescookies', cookies);
}
