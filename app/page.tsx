/* eslint-disable @typescript-eslint/no-explicit-any */

import { productApi } from '@/core/services/product';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic'; // Force dynamic rendering

export default async function Home() {
	const productsData = await productApi.products();
	console.log('products12', productsData);

	return (
		<Suspense fallback='loadin'>
			{productsData?.data?.map((product: any) => (
				<h6 key={product.id}>{product.name}</h6>
			))}
		</Suspense>
	);
}
