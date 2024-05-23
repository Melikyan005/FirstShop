import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import "./Products.css"

const Products = ({products,addTocart}) => {
  return (
    <div className='all-products'>
      {
    products.map((e)=>{
      return <ProductCard addTocart={addTocart}key = {e.id} product={e}/>
    })
    }
    </div>
  )
}

export default Products