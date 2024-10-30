import React, { createContext, useState } from 'react';

// Cria o contexto
export const AuthContext = createContext();

// Provedor do contexto para armazenar e disponibilizar os estados
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [isMaster, setIsMaster] = useState(false);     // Estado de acesso master

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isMaster, setIsMaster }}>
      {children}
    </AuthContext.Provider>
  );
};
