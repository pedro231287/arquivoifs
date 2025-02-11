import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./pages/login";
import AddDocument from "./pages/AddDocument";
import AddMetaDados from "./pages/AddMetaDados";
import CadastroCodigo from "./pages/CadastroCodigos";
import SearchDocument from "./pages/SearchDocument";
import ProfileCreator from "./pages/ProfileCreator";
import Lixeira from "./pages/Lixeira";
import Perfil from "./pages/Perfil";
import Navbar from "./pages/Navbar";
import Navbar2 from './pages/Navbar 2';
import { AuthContext } from "./contexts/AuthContext"; // Importa o contexto

function RouteApp() {
  const { isLoggedIn, setIsLoggedIn, isMaster, setIsMaster } = useContext(AuthContext); // Usa os estados globais
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setIsMaster(false); // Reinicia o estado de master quando o usuário faz logout
      }
    });

    return () => unsubscribe();
  }, [auth, setIsLoggedIn, setIsMaster]);

  return (
    <BrowserRouter>
  {isLoggedIn && (isMaster ? <Navbar /> : <Navbar2 />)} {/* Renderiza Navbar ou Navbar2 com base no estado de isMaster */}
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/add" element={isLoggedIn ? <AddDocument /> : <Login />} />
    <Route path="/search" element={isLoggedIn ? <SearchDocument /> : <Login />} />
    <Route path="/createProfile" element={isLoggedIn ? (isMaster ? <ProfileCreator /> : <SearchDocument />) : <Login />} />
    <Route path="/addmetadados" element={isLoggedIn ? (isMaster ? <AddMetaDados /> : <SearchDocument />) : <Login />} />
    <Route path="/cadastroCodigos" element={isLoggedIn ? (isMaster ? <CadastroCodigo /> : <SearchDocument />) : <Login />} />
    <Route path="/lixeira" element={isLoggedIn ? <Lixeira /> : <Login />} />
    <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Login />} />
  </Routes>
</BrowserRouter>

  );
}

export default RouteApp;
