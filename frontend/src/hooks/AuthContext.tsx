/**
 * @file: AuthContext
 * @info: Component Auth context of the App
 */

// Dependencies import
import React, { createContext, useCallback, useState, useContext } from 'react';

// Utils and services import
import api from '../services/api';

// Interfaces definition
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  token: string;
  userData: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // Storage user information
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Bilinho: token');
    const userData = localStorage.getItem('@Bilinho: userData');

    if (token && userData) {
      return { token, userData: JSON.parse(userData) };
    }

    return {} as AuthState;
  });

  // SignIn function
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, userData } = response.data;

    localStorage.setItem('@Bilinho: token', token);
    localStorage.setItem('@Bilinho: userData', JSON.stringify(userData));

    setData({ token, userData });
  }, []);

  // SignOut function
  const signOut = useCallback(() => {
    localStorage.removeItem('@Bilinho: token');
    localStorage.removeItem('@Bilinho: userData');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.userData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
