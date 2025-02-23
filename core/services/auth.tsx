/* eslint-disable @typescript-eslint/no-explicit-any */
import { post } from '@/utils/api';

export const authApi = {
	signIn: async (data: any) => post(`auth/sign-in`, data),
};
