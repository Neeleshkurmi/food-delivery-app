import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientOfRestaurant, updateStock } from '../../State/Ingredients/Action';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients, restaurant } = useSelector((state) => state);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(
      getIngredientOfRestaurant({
        id: restaurant.usersRestaurant.id,
        jwt,
      })
    );
  }, [dispatch, restaurant.usersRestaurant.id, jwt]);

  const handleUpdateStock = (id) => {
    dispatch(updateStock({ id, jwt }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Ingredients
      </Typography>
      <Button variant="contained" color="primary">
        Create Ingredient
      </Button>
      <Grid container spacing={2}>
        {ingredients.ingredients.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.category.name}</Typography>
                <Button onClick={() => handleUpdateStock(item.id)}>
                  {item.inStoke ? 'In Stock' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Ingredients;
