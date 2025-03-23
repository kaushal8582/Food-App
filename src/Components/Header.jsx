import React from 'react'
import "./Header.css"
import CartComponent from './CartComponent'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ReactMeals</div>
      <CartComponent count={3} />
    </header>
  )
}

export default Header