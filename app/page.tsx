/* eslint-disable @typescript-eslint/no-explicit-any */

import { productApi } from '@/core/services/product';
import { Suspense } from 'react';

export default async function Home() {
	const productsData = await productApi.products();

	return (
		<Suspense fallback='loadin'>
			{productsData?.data?.map((product: any) => (
				<h6 key={product.id}>{product.name}</h6>
			))}
		</Suspense>
	);
}
