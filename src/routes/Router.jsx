import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './Calculator'
import { Providers } from '../Providers'
import Home from './Home'
const Router = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  )
}

export default Router
