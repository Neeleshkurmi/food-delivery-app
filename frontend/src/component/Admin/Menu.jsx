import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItemsByRestaurantId } from '../../State/Menu/Action';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Menu = () => {
  const dispatch = useDispatch();
  const { menu, restaurant } = useSelector((state) => state);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: restaurant.usersRestaurant.id,
        jwt,
      })
    );
  }, [dispatch, restaurant.usersRestaurant.id, jwt]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Menu
      </Typography>
      <Button variant="contained" color="primary">
        Add Menu Item
      </Button>
      <Grid container spacing={2}>
        {menu.menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>${item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;
