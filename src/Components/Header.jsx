import React from 'react'
import "./Header.css"
import CartComponent from './CartComponent'

import { useContext } from 'react'
import CartContext from '../store/cart-context'

const Header = (props) => {

  const {items} = useContext(CartContext)


  return (
    <header className="header">
      <div className="logo">ReactMeals</div>
      <CartComponent count={items.length} props ={props} />
    </header>
  )
}

export default Header