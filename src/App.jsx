
import React from 'react'
import Layout from './Components/Layout'
import { BrowserRouter, Routes , Route } from 'react-router'
import Home from './pages/Home'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
