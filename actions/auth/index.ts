'use server';

import { authApi } from '@/core/services/auth';
import { redirect } from 'next/navigation';

export type Inputs = {
	email?: string;
	password?: string;
	role?: string;
};

export type FormState = {
	errors: Inputs;
};

export const signInAction = async (prevState: FormState, formData: FormData) => {
	const email = formData.get('email');
	const password = formData.get('password');
	const role = formData.get('role');

	const errors: Inputs = {};

	if (!email) errors.email = 'Email is required';

	if (!password) errors.password = 'password is required';

	if (!role) errors.role = 'role is required';

	if (Object.keys(errors)?.length > 0) {
		return { errors };
	}

	await authApi.signIn({ email, password, role });
	redirect('/');
};
