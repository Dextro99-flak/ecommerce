import React from 'react' ;
import cart from '../Assets/cart_icon.png' ;
import logo from '../Assets/logo.png' ;
import { useState } from 'react';
import {Link} from 'react-router-dom' ;
import './Navbar.css' ;

function Navbar(props) {
    let [menu, setMenu] = useState() ;
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo} alt="website logo" />
            <p>SHOPPER</p>
        </div>
        <div className='nav_menu'>
            <ul>
                <li onClick = {()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="cart_login">
            <Link to='/login'><button className="login_button">Login</button></Link>
            <Link to='/cart'><img src={cart} alt="cart image" /></Link>
            <div className="cart_login_count"><center>{props.cart.length}</center></div>
        </div>
    </div>
  )
}

export default Navbar ;