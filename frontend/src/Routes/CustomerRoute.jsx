import React from 'react'
import { Navbar } from '../component/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../component/Home/HomePage'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import { Auth } from '../component/Auth/Auth'
import { AddressCard } from '../component/Cart/AddressCard'

export const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/account/:register' element={<HomePage/>}/>
          <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/my-profile/*' element={<Profile/>}/>
          <Route path='/address-card' element={<AddressCard/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}
