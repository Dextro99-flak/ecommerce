import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop' ;
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product'; 
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import About from './Pages/About';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0) ;
  let [cart, setCart] = useState([]) ;
  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart}/>
    <hr />
      <Routes>
          <Route path='/' element={<Home cart={cart} cartHandle={setCart}/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart cart={cart}/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
