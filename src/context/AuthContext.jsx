import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

// Tạo AuthContext
const AuthContext = createContext();

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Kiểm tra token khi component mount
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');
      
      if (token && savedUser) {
        try {
          // Validate token với server
          const userData = await authService.validateToken();
          setUser(userData.user || JSON.parse(savedUser));
        } catch (error) {
          // Token không hợp lệ, xóa dữ liệu
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      }
      setLoading(false);
    };
    
    initAuth();
  }, []);
  
  const login = async (credentials) => {
    try {
      console.log('AuthContext login starting...');
      const data = await authService.login(credentials);
      console.log('AuthContext login data received:', data);
      setUser(data.user);
      console.log('AuthContext user state updated:', data.user);
      return data;
    } catch (error) {
      console.error('AuthContext login error:', error);
      throw error;
    }
  };
  
  const register = async (userData) => {
    try {
      const data = await authService.register(userData);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
    }
  };
  
  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;