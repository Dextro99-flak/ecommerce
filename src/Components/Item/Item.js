import React from 'react' ;
import './Item.css' ;
import { Link } from 'react-router-dom';

function Item(props) {
    function cartAddItem(){
        // add functionality for sending the product id to the backend so that frontend manipulation
        // will not affect the order. 
        let cart_current = [] ;
        for(let i=0; i<props.cart.length;i++){
            if(props.cart[i]!=props.id){
                cart_current.push(props.cart[i]) ;
            }
        }
        cart_current.push(props.id) ;
        props.cartHandle(cart_current) ;
    }
  return (
    <div className="item-box">
        <div className="item-image">
            <img src={props.image} alt='product image' />
        </div>
        <div className='item-name'>
            <p>{props.name}</p>
        </div>
        <div className='item-prices'>
            <div className='item-new-price'>
                <p>{props.new_price}</p>
            </div>
            <div className='item-old-price'>
                <p>{props.old_price}</p>
            </div>
        </div>
        <div className="item-add-cart-button">
            <button onClick={cartAddItem}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Item ;