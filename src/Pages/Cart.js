import React from 'react'
import data_product from '../Components/Assets/data.js' ;
import CartItem from '../Components/CartItem/CartItem.js' ;
import './Cart.css' ;

function Cart(props) {
  let cart_current = [] ;
  let total_cost = 0 ;
  for(let i=0; i<props.cart.length;i++){
    for(let j=0; j<data_product.length; j++){
      if(data_product[j].id===props.cart[i]){
        console.log(data_product[j],props.cart[i],' This where the product data is being displayed in cart') ;
        cart_current.push(data_product[j]);
        total_cost = total_cost + data_product[j].new_price;
        break ;
      }
    }
  }
  return (
    <div className='cart-container'>
    <div className='cart-display'>
      {cart_current.map((item,key) =>{
        return <CartItem key={key} name={item.name} image={item.image} price={item.new_price} product_id={item.id} />
      })}
    </div>
    <div className='cart-checkout'>
      <h5>GRAND TOTAL : </h5>
      <h2>{total_cost}</h2>
    </div>
    </div>
  )
}

export default Cart