import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConnection';

// Cria o contexto
export const AuthContext = createContext();

// Provedor do contexto para armazenar e disponibilizar os estados
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [isMaster, setIsMaster] = useState(false);     // Estado de acesso master

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);

        try {
          const q = query(collection(db, "master"), where("email", "==", user.email));
          const querySnapshot = await getDocs(q);
          setIsMaster(!querySnapshot.empty);
        } catch (error) {
          console.error("Erro ao verificar status de master:", error);
          setIsMaster(false);
        }

      } else {
        setIsLoggedIn(false);
        setIsMaster(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isMaster }}>
      {children}
    </AuthContext.Provider>
  );
};
