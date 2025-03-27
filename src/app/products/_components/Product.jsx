"use client"
import React, {useEffect} from 'react'
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";

export default function Product() {
	const params = useParams()

   const {data, isLoading, error} = useQuery({
		 queryKey: "product",
		 queryFn: async ()=>{
			 const product = await fetch(`https://fakestoreapi.com/products/${params.id}`)
       const data = await product.json()
			 return data
		 },
		 enabled: !!params.id
	 })


	if(isLoading){
		return <div>loading ...</div>
	}

	return (
			<div>

				<Image src={data?.image} width={200} height={200} alt="product"/>


			</div>
	)
}
