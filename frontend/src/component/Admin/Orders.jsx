import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantOrders } from '../../State/Restaurant/Action';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Orders = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(getRestaurantOrders({ restaurantId: restaurant.usersRestaurant.id, jwt }));
  }, [dispatch, restaurant.usersRestaurant.id, jwt]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Order History
      </Typography>
      <Grid container spacing={2}>
        {restaurant.orders?.map((order) => (
          <Grid item xs={12} key={order.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Order ID: {order.id}</Typography>
                <Typography>Status: {order.orderStatus}</Typography>
                <Typography>Total: ${order.totalAmount}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orders;
