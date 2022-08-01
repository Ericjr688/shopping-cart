import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className='blue-grey darken-3 blue-grey-text text-lighten-5'>
      <div className='nav-wrapper container'>
        <Link className='brand-logo left large-font-size' to='/'>Fake Store</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li className='shopping-cart-icon' onClick={props.toggleCart}>
            <span className='badge blue-grey lighten-5 circle'>{props.totalQuantity}</span>
            <i className="material-icons">shopping_cart</i>
          </li>
        </ul>
      </div>
    </nav>
  )
}
