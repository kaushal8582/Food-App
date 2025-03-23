import React from 'react'
import Header from './Components/Header'
import BackgroundImage from './Components/BackgroundImage'
import RestaurantSummary from './Components/RestaurantSummary'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <BackgroundImage/>
      <main>
        <RestaurantSummary/>
      </main>
    </div>
  )
}

export default App