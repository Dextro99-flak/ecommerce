import React from 'react' ;
import './Hero.css' ;
import HeroImage from '../Assets/hero_image.png' ;
import HandIcon from '../Assets/hand_icon.png' ;
import Arrow from '../Assets/arrow.png' ;
import {Link} from 'react-router-dom' ;

function Hero() {
  return (
    <div className='HeroContainer'>
        <div className='hero-left'>
            <h2 style={{ fontWeight:'500' }} >NEW ARRIVALS ONLY</h2>
            <p style={{ fontSize:'50px' }}>New <img src={HandIcon} alt="Hand Icon part of Hero Image" />
            <br/>Collections
            <br/>for everyone</p>
        </div>
        <div className='hero-right'>
            <img src={HeroImage} alt="Hero Images" />
            <button className='hero-right-button'>
            <Link to='/shop' style={{ textDecoration:'none',color:'beige' }}>Latest Collections    <img src={Arrow} alt="Arrow image in button" /></Link>
            </button>
        </div>
    </div>
  )
}

export default Hero