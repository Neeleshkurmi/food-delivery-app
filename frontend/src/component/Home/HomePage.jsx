import React, { useEffect } from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurnatsAction } from '../../State/Restaurant/Action';
import { useNavigate } from 'react-router-dom';
const restaurants=[1,1,1,1,1,1,1,1]

export const HomePage = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {restaurant} = useSelector(store => store)
  const navigate = useNavigate()

  console.log("restaurant",restaurant)

  useEffect(() => {
    dispatch(getAllRestaurnatsAction(jwt))
  }, [dispatch, jwt])
  
  return (
    <div className='pb-10'>
        <section className='banner'>
            <div className='cover'></div>
            <div className='text-content'>
                <h1 className='restaurant-name'>Harshita Food</h1>
                <p className='tagline'>Taste the Convenience: Food, Fast and Delivered.</p>
            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px20'>
          <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meels</p>
          <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
          <h1 className='text-2xl font-semibold text-gray-400 pb-8'>
            Order From Handpicked Favourites
          </h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
            {
              restaurant.restaurants.map((item)=><RestaurantCard item={item}/>)
            }
          </div>
        </section>
    </div>
  );
}