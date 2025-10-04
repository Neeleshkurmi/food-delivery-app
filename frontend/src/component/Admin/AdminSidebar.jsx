import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const AdminSidebar = () => {
  const { restaurant } = useSelector((state) => state);

  return (
    <div>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin/menu">Menu</Link>
        </li>
        <li>
          <Link to="/admin/ingredients">Ingredients</Link>
        </li>
        {!restaurant.usersRestaurant && (
          <li>
            <Button
              component={Link}
              to="/admin/create-restaurant"
              startIcon={<AddBusinessIcon />}
            >
              Create Restaurant
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AdminSidebar;
