
import React from 'react'
import Link from "next/link";

export default async function Page() {
	const data = await fetch('https://fakestoreapi.com/products')
	const products = await data.json()

	return (
			<div className={"flex flex-col gap-6 p-24"}>
				{
					products?.map((product) => (
							<Link href={`/products/${product.id}`}>{product.title}</Link>
					))
				}
			</div>
	)
}
