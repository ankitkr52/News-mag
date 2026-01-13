import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'

const App = () => {
  const [category,setCategory]=useState("health")
  // const [country,setCountry]=useState("in")
  return (
    <div>
      <Navbar  setCategory={setCategory}/>
      <Newsboard  category={category}/>
      
    </div>
  )
}

export default App
