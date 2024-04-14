import React from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import ProductList from './components/ProductList'
import { Provider } from 'react-redux'
import store from './store/store'
const App = () => {
  return (<>
     <Provider store={store}>
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
           </Routes>
     </Provider>
  </>

  )
}

export default App