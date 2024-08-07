import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Private = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return <div>Loading...</div>; // or a spinner/loader component
  }

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Private;
