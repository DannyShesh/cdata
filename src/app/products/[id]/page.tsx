import React from 'react'
import { getProductsById } from '@/utils/getProducts'
import ProductInfo from '@/app/components/ProductInfo';

export default async function productId({params}: {params: {id: string}}) {
    const data = await getProductsById(params.id)
    console.log(data);
    
    
  return (
    <ProductInfo id={data[0].id} name={data[0].name} price={data[0].price} ></ProductInfo>
  )
}
