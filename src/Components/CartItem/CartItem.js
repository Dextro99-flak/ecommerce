import React from 'react' ;
import './CartItem.css' ;
function CartItem(props) {
  return (
    <div className='cart-item'>
        <div className='cart-item-image'>
            <img src={props.image} alt="product view in cart" />
        </div>
        <div className='cart-item-data'>
            <p className='cart-item-name'>{props.name}</p>
            <p className='cart-item-price'>${props.price}</p>
        </div>
    </div>
  )
}

export default CartItem