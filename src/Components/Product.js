import React, { useState, useEffect }  from 'react'

export default function Product(props) {
  const [ quantity, setQuantity ] = useState(1);

  function btnClickHandler(){
    let product = {...props}
    product.quantity = quantity;
    props.addProductToCart(product);
    setQuantity(1);
  }

  return (
    <div className="col s12 m6 l4">
      <div className="card large">
        <div className="card-image">
          <img src={props.image.src} alt={props.image.alt} />
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>${props.price}</p>
        </div>
        <div className="card-action">
          <button 
            type='button'
            className="btn-large col s12 blue-grey darken-4 blue-grey-text text-lighten-5" 
            onClick={btnClickHandler}>Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
