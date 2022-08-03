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
import backpack from "./images/backpack.jpg"
import menCasual from "./images/men-casual.jpg"
import womenWhiteTee from "./images/women-white-tee.jpg"

import Cart from './Components/Cart';

function App() {
  // Gets the total quantity for the cart icon on initial load and every subsequent update
  useEffect(() => {
    getTotalQuantity();
  })
  
  // Product objects
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
      title: `Women's Jacket`, 
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
      title: `Women's Tee`, 
      img: {
        src: womenShortSleve,
        alt: 'women shortsleve',
      },
      price: 17.29,
    },
    {
      id: 4, 
      title: `Women's W-Tee`, 
      img: {
        src: womenWhiteTee,
        alt: 'women white tee',
      },
      price: 9.99,
    },
    {
      id: 5, 
      title: `Backpack`, 
      img: {
        src: backpack,
        alt: 'women backpack',
      },
      price: 14.99,
    },
    {
      id: 6, 
      title: `Men's Casual`, 
      img: {
        src: menCasual,
        alt: 'men casual',
      },
      price: 12.59,
    },
  ];


  const [products, setProducts] = useState(PRODUCTS.slice(0));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState('hide');
  const [totalQuantity, setTotalQuantity] = useState(0);

  function toggleCart() {
    if ( showCart === 'show' ) {
      setShowCart('hide');
    } else {
      setShowCart('show');
    }
  }

  // creates and returns an array containing the items from the current cart without mutating the original one
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
      };  
    };
  };

  function getTotalQuantity() {
    let sum = 0;
    let tempCart = [...cart]
    for ( let i in tempCart ) {
      sum += (tempCart[i].quantity);
    };
    setTotalQuantity(sum);
  };

  function increaseProductQuantity(shopProduct){
    let tempCart = getCart();
    let product = {...shopProduct};

    for (let i in tempCart) {
      if (product.title === tempCart[i].title){
        tempCart[i].quantity++;
        setCart(tempCart)
      };  
    };
  }

  function decreaseProductQuantity(shopProduct){
    let tempCart = getCart();
    let product = {...shopProduct};

    for (let i in tempCart) {
      if (product.title === tempCart[i].title && tempCart[i].quantity > 1){
        tempCart[i].quantity--;
        setCart(tempCart)
      }else if ( product.title === tempCart[i].title && tempCart[i].quantity === 1) {
        tempCart = tempCart.filter ((prod) => {
          return prod.title !== product.title
        })
        setCart(tempCart)
      } 
    };
  }

  return (
    <BrowserRouter>
      <NavBar toggleCart={toggleCart} totalQuantity= {totalQuantity} />
      {/* {cart.map((product, index) => (
          <p key={product.id}>{product.title}  id={product.id} price={product.price} quantity={product.quantity}</p>
        ))} */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop products={products} addProductToCart={addProductToCart}/>}/>
      </Routes>
      { showCart === 'show' ? <Cart toggleCart={toggleCart} cart={cart} increase = {increaseProductQuantity} decrease = {decreaseProductQuantity}/> : null}
    </BrowserRouter>
  );
}

export default App;


//proper homepage
// clear cart
// cleanup and comment
// transitions and smoothen out css especially in cart
// learn good developing and gitHub practices and add them to project

// possibly set quantity from shop page. not needed but easy
// possibly pages for individual products. see param in route video