import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./pages/login";
import AddDocument from "./pages/AddDocument";
import SearchDocument from "./pages/SearchDocument";
import ProfileCreator from "./pages/ProfileCreator";
import Lixeira from "./pages/Lixeira";
import Perfil from "./pages/Perfil";
import Navbar from "./pages/Navbar";

function RouteApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMaster, setIsMaster] = useState(false); // Estado para controlar se é master
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
  }, [auth]);

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />} 
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
        <Route path="/add" element={isLoggedIn ? <AddDocument /> : <Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
        <Route path="/search" element={isLoggedIn ? <SearchDocument /> : <Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
        <Route path="/createProfile" element={isMaster ? <ProfileCreator /> : <Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
        <Route path="/lixeira" element={isLoggedIn ? <Lixeira /> : <Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
        <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Login setIsLoggedIn={setIsLoggedIn} setIsMaster={setIsMaster} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
