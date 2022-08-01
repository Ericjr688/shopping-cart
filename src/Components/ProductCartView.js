import React from 'react'

export default function ProductCartView(props) {
  return (
    <div className='row card-panel grey lighten-5 z-depth-1 cart-view-row'>
      <div className="image col s2">
        <img src={props.image.src} alt={props.image.alt} className='responsive-img' />
      </div>
      <div className='col s10'>
          <p className='right'>{props.title}</p>
          <p className='right'>${props.price}</p>
          <p className='right'>{props.quantity}</p>
      </div>
    </div>
  )
}
// custom css for this part