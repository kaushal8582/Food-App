import React, { useState } from 'react'
import Header from './Components/Header'
import BackgroundImage from './Components/BackgroundImage'
import RestaurantSummary from './Components/RestaurantSummary'
import MealList from './Components/MealList'
import Popup from './UI/Popup'
import CartProvider from './store/cart-provider.jsx'

const App = () => {

  const [openCart,setOpenCart] = useState(false);

  const handleCart = () => {
    setOpenCart(true);
  }

  const handleCloseCart = () => {
    setOpenCart(false);
  }

  return (
    <CartProvider>
    <div className='App'>
      {openCart && <Popup onClose ={handleCloseCart}  />}
      <Header onOpenCart ={handleCart} />
      <BackgroundImage/>
      <main>
        <RestaurantSummary/>
        <MealList/>
      </main>
    </div>
    </CartProvider>
  )
}

export default App