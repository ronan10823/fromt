import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider null');
  }
  return context;
}

export default useAuth;
