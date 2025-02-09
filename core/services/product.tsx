import { get } from '@/utils/api';

export const productApi = {
	// products: async () => get(`products`, { cache: 'no-store' }),
	products: async () => get(`products`),
};
