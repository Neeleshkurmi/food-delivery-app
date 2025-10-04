import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantByUserID } from '../../State/Restaurant/Action';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CreateRestaurantForm from './CreateRestaurantForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(getRestaurantByUserID(jwt));
  }, [dispatch, jwt]);

  return (
    <div>
      {restaurant.usersRestaurant ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {restaurant.usersRestaurant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.usersRestaurant.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.usersRestaurant.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {restaurant.usersRestaurant.open ? 'Open' : 'Closed'}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <CreateRestaurantForm />
      )}
    </div>
  );
};

export default Dashboard;
