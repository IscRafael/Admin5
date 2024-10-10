import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AdminLayout>
          <AppRoutes />
        </AdminLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;