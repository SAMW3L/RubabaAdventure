import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

<<<<<<< HEAD
export default ProtectedRoute;
=======
export default ProtectedRoute;
>>>>>>> 9c15c56387fc6ad0a2bbb367094caaa28346cc51
