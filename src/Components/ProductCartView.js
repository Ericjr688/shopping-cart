
import React, { useState, useEffect } from 'react'

export default function ProductCartView(props) {


  function increaseQuantityBtnHandler() {
    let product = {...props}
    props.increase(product);
  };

  function decreaseQuantityBtnHandler() {
    let product = {...props}
    props.decrease(product);
  };

  return (
    <div className='row  grey lighten-5 z-depth-1 cart-view-row'>
      <div className="image col s3">
        <img src={props.image.src} alt={props.image.alt} className='responsive-img' />
      </div>
      <div className='col s8 right cart-product-description'>
        <p className=' cart-p-title '>{props.title}</p>
        <p className=' cart-p-price'>${props.price}</p>
        <div className='row quantity-container'>
          <button className='q-button' onClick={decreaseQuantityBtnHandler} ><i className="material-icons">remove</i></button>
          <div className=''>{props.quantity }</div>
          <button className='q-button' onClick={increaseQuantityBtnHandler} ><i className="material-icons">add</i></button>
        </div>
      </div>
    </div>
  )
}
