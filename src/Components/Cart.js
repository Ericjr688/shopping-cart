import React from 'react'
import ProductCartView from './ProductCartView'

export default function Cart(props) {

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
          <ProductCartView title={product.title} key={product.id} id={product.id} image={product.image} price={product.price} quantity={product.quantity}/>
        ))}
      </div>
      <div className='row'>
        <h5 className='col s12 center'>Total: $</h5>
      </div>
      <div className='row'>
        <a href='#' className="waves-effect waves-light btn-large col s12 medium-font-size blue-grey-text text-darken-4">Checkout</a>
      </div>
      
    </div>
  )
}
