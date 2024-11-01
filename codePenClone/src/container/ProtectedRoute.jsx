import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in by accessing the Redux state
  const user = useSelector((state) => state.users?.userData);

  // If there is no user data, redirect to the login or sign-up page
  if (!user) {
    return <Navigate to="/home/auth" />;
  }

  // If user is authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
