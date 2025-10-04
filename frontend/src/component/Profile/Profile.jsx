import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Address from './Address';
import Favorite from './Favorite';
import Events from './Events';
import Notification from './Notification';
import Payments from './Payments';
const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
        
        // const handleClose = () => {
        //     setOpenSideBar(false);
        // };
    
      return (
        <div className='lg:flex justify-between'>
          <div className='sticky h-[80vh] lg:w-[20%]'>
              <ProfileNavigation open={openSideBar} 
              />
          </div>
        <div className='lg:w-[80%]'>
            <Routes>
              <Route path='/' element={<UserProfile/>}/>
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/address' element={<Address/>}/>
              <Route path='/favorites' element={<Favorite/>}/>
              <Route path='/events' element={<Events/>}/>
              <Route path='/notification' element={<Notification/>}/>
              <Route path='/payments' element={<Payments/>}/>
            </Routes>
        </div>
  </div>
  )
}

export default Profile