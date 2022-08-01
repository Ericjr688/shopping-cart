import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

import menSlimfit  from "./images/men-slim-fit.jpg"
import womenRainJacket  from "./images/women-rain-jacket.jpg"
import menJacket  from "./images/men-jacket.jpg"
import womenShortSleve  from "./images/women-short-sleeve.jpg"
import Cart from './Components/Cart';

function App() {
  const PRODUCTS = [
    {
      id: 0, 
      title: `Men's Slimfit`, 
      img: {
        src: menSlimfit,
        alt: 'men slimfit',
      },
      price: 20.99,
    },
    {
      id: 1, 
      title: `Women's Rain Jacket`, 
      img: {
        src: womenRainJacket,
        alt: 'women rain jacket',
      },
      price: 57.69,
    },
    {
      id: 2, 
      title: `Men's Jacket`, 
      img: {
        src: menJacket,
        alt: 'men jacket',
      },
      price: 60.99,
    },
    {
      id: 3, 
      title: `Women's Short Sleve`, 
      img: {
        src: womenShortSleve,
        alt: 'women shortsleve',
      },
      price: 17.29,
    },
  ];

  const [products, setProducts] = useState(PRODUCTS.slice(0));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState('hide');

  function toggleCart() {
    if ( showCart === 'show' ) {
      setShowCart('hide');
    } else {
      setShowCart('show');
    }
  }

  function getCart(){
    let tempCart = [...cart];
    return tempCart;
  }
  function addProductToCart(shopProduct) {
    let tempCart = getCart();
    let product = {...shopProduct};
    let present = tempCart.filter((i) => {
      return i.title === product.title;
    })

    if (tempCart.length === 0) {
      setCart(tempCart.concat(product));
      return ;
    } else if (present.length === 0) {
      setCart(tempCart.concat(product));
    }
    for (let i in tempCart) {
      if (product.title === tempCart[i].title && tempCart[i].quantity >= 1){
        tempCart[i].quantity+= product.quantity;
        setCart(tempCart)
      }  
    }

  }

  return (
    <BrowserRouter>
      <NavBar toggleCart={toggleCart}/>
      {/* {cart.map((product, index) => (
          <p key={product.id}>{product.title}  id={product.id} price={product.price} quantity={product.quantity}</p>
        ))} */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop products={products} addProductToCart={addProductToCart}/>}/>
      </Routes>
      { showCart === 'show' ? <Cart toggleCart={toggleCart} cart={cart}/> : null}
    </BrowserRouter>
  );
}

export default App;
