import React from 'react'
import { getProducts } from '@/utils/getProducts'
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default async function products() {
    const data = await getProducts()
    console.log(data);
    
  return (
    <div className='flex w-full min-h-screen flex-wrap gap-10 flex-auto' >
        { data.map(product => (
         <ProductCard id={product.id} name={product.name} price={product.price} href={`/products/${product.id}`} >  </ProductCard>  
        )) }
    </div>
  )
}
