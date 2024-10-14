import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importando o Firebase Auth
import Login from "./pages/login";
import AddDocument from "./pages/AddDocument";
import SearchDocument from "./pages/SearchDocument";
import ProfileCreator from "./pages/ProfileCreator";
import Lixeira from "./pages/Lixeira";
import Perfil from "./pages/Perfil";
import Navbar from "./pages/Navbar"; // Importando o componente Navbar

function RouteApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado
  const auth = getAuth(); // Obter a instância do Firebase Auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // Usuário está logado
      } else {
        setIsLoggedIn(false); // Usuário não está logado
      }
    });

    return () => unsubscribe(); // Limpar o observador quando o componente for desmontado
  }, [auth]);

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />} {/* Passando a função de atualizar o estado para o Navbar */}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        {/* Condicionais para proteger as rotas */}
        <Route path="/add" element={isLoggedIn ? <AddDocument /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/search" element={isLoggedIn ? <SearchDocument /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/createProfile" element={isLoggedIn ? <ProfileCreator /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/lixeira" element={isLoggedIn ? <Lixeira /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
