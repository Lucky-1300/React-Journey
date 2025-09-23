import React from 'react'
import './ProductList.css'


const ProductList = () => {

  const image = [
    "Product-list/vite-project/public/laptop.webp",
    "Product-list/vite-project/public/phone.webp",
    "Product-list/vite-project/public/tablet.avif"
  
  ];
  return (
    <div>
    <h1>Lucky Ray</h1>
    <img src="Product-list/vite-project/public/tablet.avif" alt="" />
    </div>
  )
}

export default ProductList
