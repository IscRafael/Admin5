import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Category from '../pages/Category';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/articulos/products" element={<Products />} />
      <Route path="/articulos/category" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;