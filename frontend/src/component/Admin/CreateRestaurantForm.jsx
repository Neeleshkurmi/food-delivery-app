import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../State/Restaurant/Action';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CreateRestaurantForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cuisineType: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    email: '',
    mobile: '',
    twitter: '',
    instagram: '',
    openingHours: 'Mon-Sun: 9:00 AM - 12:00 AM',
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurantData = {
      name: formData.name,
      description: formData.description,
      cuisineType: formData.cuisineType,
      address: {
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
      },
      contactInformation: {
        email: formData.email,
        mobile: formData.mobile,
        twitter: formData.twitter,
        instagram: formData.instagram,
      },
      openingHours: formData.openingHours,
      images: formData.images,
    };
    dispatch(createRestaurant({ data: restaurantData, token: localStorage.getItem('jwt') }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="cuisineType"
            label="Cuisine Type"
            value={formData.cuisineType}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="streetAddress"
            label="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="postalCode"
            label="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobile"
            label="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="twitter"
            label="Twitter"
            value={formData.twitter}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="instagram"
            label="Instagram"
            value={formData.instagram}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Restaurant
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateRestaurantForm;
