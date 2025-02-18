/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './lib/db';
// import Credentials from 'next-auth/providers/credentials';
// import { users } from './lib/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcrypt';

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: { strategy: 'jwt' },
	adapter: DrizzleAdapter(db),
	// pages: {
	// 	signIn: '/auth/sign-in',
	// },
	providers: [
		GitHub,
		Google,
		// Credentials({
		// 	name: 'Sign in',
		// 	credentials: {
		// 		email: { label: 'Email', type: 'text' },
		// 		password: { label: 'Password', type: 'password' },
		// 	},

		// 	async authorize(credentials) {
		// 		if (!credentials?.email || typeof credentials.email !== 'string' || !credentials?.password) {
		// 			return null;
		// 		}
		// 		const user = await db
		// 			.select()
		// 			.from(users)
		// 			.where(eq(users.email, String(credentials.email)))
		// 			.get();

		// 		if (!user || !(await bcrypt.compare(String(credentials.password), user.password!))) {
		// 			return null;
		// 		}

		// 		return {
		// 			id: user.id,
		// 			email: user.email,
		// 			name: user.name,
		// 		};
		// 	},
		// }),
	],
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		if (user) {
	// 			token.id = user.id;
	// 			token.email = user.email;
	// 		}
	// 		return token;
	// 	},
	// 	async session({ session, token }) {
	// 		if (session.user) {
	// 			session.user.id = token.id as string;
	// 			session.user.email = token.email as string;
	// 		}
	// 		return session;
	// 	},
	// },
});
