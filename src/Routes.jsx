import React, { useEffect } from 'react';
import { useAuth } from '../src/context/AuthContext';
import LoginPage from '../src/pages/LoginPage';
import RegisterPage from '../src/pages/RegisterPage';
import DashboardPage from '../src/pages/DashboardPage';
import LoadingSpinner from '../src/components/ui/LoadingSpinner';
import { ROUTES } from '../src/utils/constants';

const Routes = ({ currentPath, navigate }) => {
  const { user, loading } = useAuth();
  
  // Auto redirect logic - PHẢI được gọi trước bất kỳ early return nào
  useEffect(() => {
    if (!loading) { // Chỉ redirect khi không loading
      if (user && (currentPath === ROUTES.LOGIN || currentPath === ROUTES.REGISTER)) {
        navigate(ROUTES.DASHBOARD);
      } else if (!user && currentPath === ROUTES.DASHBOARD) {
        navigate(ROUTES.LOGIN);
      }
    }
  }, [user, currentPath, navigate, loading]);
  
  // Hiển thị loading khi đang kiểm tra authentication
  if (loading) {
    return <LoadingSpinner message="Đang kiểm tra đăng nhập..." />;
  }
  
  // Route matching
  switch (currentPath) {
    case ROUTES.REGISTER:
      return <RegisterPage navigate={navigate} />;
    case ROUTES.DASHBOARD:
      return user ? <DashboardPage navigate={navigate} /> : <LoginPage navigate={navigate} />;
    default:
      return <LoginPage navigate={navigate} />;
  }
};

export default Routes;