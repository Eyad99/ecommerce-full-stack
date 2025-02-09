import { productApi } from '@/core/services/product';
import { Suspense } from 'react';

export default async function Home() {
	const productsData = await productApi.products();
	console.log('productsData,productsData', productsData);
	return (
		<Suspense fallback={'loading'}>
			{productsData?.data?.map((product: any) => (
				<h6 key={product.id}>{product.name}</h6>
			))}
		</Suspense>
	);
}
