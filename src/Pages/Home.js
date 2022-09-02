import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../images/wallpaper.jpg'
import image from '../images/wallpaper.png'

export default function Home() {
  return (
    <div className='background'
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
    }}>
      <div className='homepage container'>
        <div className='row '>
          <div className='col s12 l5 left'>
            <div className='col s12 blue-grey-text text-darken-3'>Welcome to Fakestore! Wear better, look better</div>
            <div className='col s12 btn-wrapper'><Link to='/shop'><button className="btn blue-grey darken-3" type='button'>Shop Now</button></Link></div>
          </div>
          <div className='col s12 l7 right center'>
            <img src={image} className='responsive-img' alt='laptop on desk'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
