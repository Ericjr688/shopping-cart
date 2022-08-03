import React, { useState, useEffect } from 'react'
import ProductCartView from './ProductCartView'

export default function Cart(props) {

  const [ total, setTotal ] = useState(0);

  // Gets the sum of the productes in the cart on initial load and every subsequent update
  useEffect(() => {
    let sum = 0;
    let tempCart = [...props.cart]
    for ( let i in tempCart ) {
      sum += (tempCart[i].quantity * tempCart[i].price);
    };
    sum = Math.round(sum * 100) / 100;
    setTotal(sum);
  });


  return (
    <div className="cart blue-grey lighten-5 z-depth-1">
      <div className='row'>
        <div className='col s1 right' id='cart-close' onClick={props.toggleCart}><i className='material-icons'>close</i></div>
      </div>
      <div className='row'>
        <h4 className='col s12 center'>Your Shopping Cart</h4>
      </div>
      <div className='row cart-product-view'>
        {props.cart.map((product, index) => (
          <ProductCartView title={product.title} increase = {props.increase} decrease = {props.decrease} key={product.id} id={product.id} image={product.image} price={product.price} quantity={product.quantity}/>
        ))}
      </div>
      <div className='row'>
        <h5 className='col s12 center'>Total: ${total}</h5>
      </div>
      <div className='row'>
        <a href='#' className="waves-effect waves-light btn-large col s12 medium-font-size blue-grey darken-4 blue-grey-text text-lighten-5">Checkout</a>
      </div>
      
    </div>
  )
}
