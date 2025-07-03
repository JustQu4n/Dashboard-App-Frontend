import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Router from './components/layout/Router';
import Routes from './Routes';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
};

export default App;