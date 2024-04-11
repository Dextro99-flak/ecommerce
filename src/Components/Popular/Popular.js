import React from 'react' ;
import './Popular.css' ;
import data_product from '../Assets/data.js' ;
import Item from '../Item/Item' ;

function Popular(props) {
  return (
    <div className='popular'>
        <h1>POPULAR PRODUCTS</h1>
        <hr />
        <hr />
        <div className='popular-item'>
            {data_product.map( (item,key) =>{
                return <Item key={key} id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
                old_price={item.old_price} cartHandle={props.cartHandle} cart={props.cart}/>
            })}
        </div>
    </div>
  )
}

export default Popular