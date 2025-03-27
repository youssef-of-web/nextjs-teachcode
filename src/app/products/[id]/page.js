import React from 'react'
import Product from "@/app/products/_components/Product";

const fetchProduct = async (params)=>{
	const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
	const data = await product.json()
	return data
}

export async function generateMetadata({ params }) {
	const data = await fetchProduct(params)
	return {
		title: data.title,
	}
}

export default async function Page() {
	return (
			<div>
				<Product />
			</div>
	)
}
