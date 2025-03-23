import React from 'react'
import Header from './Components/Header'
import BackgroundImage from './Components/BackgroundImage'
import RestaurantSummary from './Components/RestaurantSummary'
import MealList from './Components/MealList'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <BackgroundImage/>
      <main>
        <RestaurantSummary/>
        <MealList/>
      </main>
    </div>
  )
}

export default App