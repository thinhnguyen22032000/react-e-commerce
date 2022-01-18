import React from "react";
import Header from './components/partials/Header'
import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Products from './components/product/Products'
import { ProductProvider } from "./context/productContext"
import Detail from './components/product/Detail'
import Cart from "./components/product/Cart"
import  Footer from './components/partials/Footer'
import { AuthorProvider } from "./context/authContext";
import ProtectedRoute from "./Routes/ProtectedRoure";
import Checkout from "./components/Checkout/Checkout";
import Slide from './components/Slide/Slide'

function App() {

  return (
    <div className="App">
      <AuthorProvider>
      <ProductProvider>
      <Header/>
      <Slide/>
      <Routes>
        <Route exact path='/about' element={<About/>} ></Route>
        <Route exact path='/' element={<Products/>} ></Route>
        <Route exact path='/product/:slug' element={<Detail />} ></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/checkout' element={<ProtectedRoute/>}>
          <Route exact path='/checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      </ProductProvider>
      </AuthorProvider>
    </div>
  );
}

export default App;
