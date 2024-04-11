import React from 'react' ;
import Hero from '../Components/Hero/Hero' ;
import Popular from '../Components/Popular/Popular';

export default function Home(props) {
  return (
    <div>
      <Hero />
      <Popular cart={props.cart} cartHandle={props.cartHandle}/>
    </div>
  )
}
