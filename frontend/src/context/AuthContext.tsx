/**
 * @file: AuthContext
 * @info: Component Auth context of the App
 */

// Dependencies import
import React, { createContext, useCallback } from 'react';

// Utils and services import
import api from '../services/api';

// Interfaces definition
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Sandro', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
