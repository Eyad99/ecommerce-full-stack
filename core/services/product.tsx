import { get } from '@/utils/api';

export const productApi = {
	// products: async () => get(`products`, { cache: 'reload'}),
	// products: async () => get(`products`, { next: { revalidate: 10 } }),
	products: async () => get(`products`),
};
