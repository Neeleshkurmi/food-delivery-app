import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import AdminSidebar from './AdminSidebar';
import Orders from './Orders';
import Menu from './Menu';
import Ingredients from './Ingredients';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="admin-main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
