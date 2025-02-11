import { get } from '@/utils/api';

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export const productApi = {
	// products: async () => get(`products`, { cache: 'reload'}),
	// products: async () => get(`products`, { next: { revalidate: 10 } }),
	products: async () => get(`products`),
};
