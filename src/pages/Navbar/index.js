import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConnection";

const Navbar = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const [isMaster, setIsMaster] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userEmail = user.email;
        try {
          const mestreRef = collection(db, "master");
          const q = query(mestreRef, where("email", "==", userEmail));
          const querySnapshot = await getDocs(q);
          setIsMaster(!querySnapshot.empty);
        } catch (error) {
          console.error("Erro ao verificar status de mestre:", error);
          setIsMaster(false);
        }
      } else {
        setIsMaster(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao fazer logout: ", error);
      });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    
    <nav className="menu_lateral">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <div className="btn_expandir">
        <i className="bi bi-list"></i>
      </div>
      <ul>
        <li className="iten_menu" onClick={() => handleNavigate('/perfil')}>
          <div className="navbar-links">
            <span className="icon"><i className="bi bi-person-circle"></i></span>
            <span className="txt-link">Perfil</span>
          </div>
        </li>
        {isMaster && (
          <li className="iten_menu" onClick={() => handleNavigate('/createProfile')}>
            <div className="navbar-links">
              <span className="icon"><i className="bi bi-person-plus-fill"></i></span>
              <span className="txt-link">Cadastro de usuário</span>
            </div>
          </li>
        )}
        {isMaster && (
          <li className="iten_menu" onClick={() => handleNavigate('/cadastroCodigos')}>
            <div className="navbar-links">
              <span className="icon"><i className="bi bi-file-earmark-plus-fill"></i></span>
              <span className="txt-link">Cadastro do código</span>
            </div>
          </li>
        )}
        {isMaster && (
          <li className="iten_menu" onClick={() => handleNavigate('/addmetadados')}>
            <div className="navbar-links">
              <span className="icon"><i className="bi bi-file-earmark-plus-fill"></i></span>
              <span className="txt-link">Adição de Metadados</span>
            </div>
          </li>
        )}
        <li className="iten_menu" onClick={() => handleNavigate('/add')}>
          <div className="navbar-links">
            <span className="icon"><i className="bi bi-file-earmark-plus-fill"></i></span>
            <span className="txt-link">Adição de arquivo</span>
          </div>
        </li>
        <li className="iten_menu" onClick={() => handleNavigate('/search')}>
          <div className="navbar-links">
            <span className="icon"><i className="bi bi-search"></i></span>
            <span className="txt-link">Pesquisa e edição</span>
          </div>
        </li>
        <li className="iten_menu" onClick={() => handleNavigate('/lixeira')}>
          <div className="navbar-links">
            <span className="icon"><i className="bi bi-trash"></i></span>
            <span className="txt-link">Lixeira</span>
          </div>
        </li>
        <li className="iten_menu" onClick={handleLogout}>
          <div className="logout-link">
            <span className="icon"><i className="bi bi-box-arrow-in-left"></i></span>
            <span className="txt-link">Sair</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
