import { productApi } from '@/core/services/product';

export default async function Home() {
	const productsData = await productApi.products();
	console.log('productsData,productsData', productsData);
	return (
		<>
			{productsData?.map((product: any) => (
				<h6 key={product.id}>{product.name}</h6>
			))}
		</>
		// <Suspense fallback={'loading'}>
		// 	{productsData?.data?.map((product: any) => (
		// 		<h6 key={product.id}>{product.name}</h6>
		// 	))}
		// </Suspense>
	);
}
