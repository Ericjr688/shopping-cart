import React, { useState, useEffect }  from 'react'
import Product from '../Components/Product'


export default function Shop(props) {
  return (
    <div className='container'>
      <div className='product-container'>
        <div className='row'>
          {props.products.map((product, index) => (
            <Product title={product.title} key={product.id} id={product.id+1000} image={product.img} price={product.price} addProductToCart={props.addProductToCart}/>
          ))}
        </div>
      </div>
    </div>
  )
}
