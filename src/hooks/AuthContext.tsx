import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Login:token');
    const user = localStorage.getItem('@Login:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@Login:token');
    localStorage.removeItem('@Login:user');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('', {
      email: email,
      senha: password,
    });

    const token = response.data;
    const user = 'Harley';
    localStorage.setItem('@Login:token', token);
    localStorage.setItem('@Login:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
