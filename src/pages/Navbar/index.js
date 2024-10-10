import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redireciona para a página de login após o logout
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao fazer logout: ", error);
      });
  };


  return (
    <nav className="menu_lateral">
      <div className="btn_expandir">
        <i className="bi bi-list"></i>
      </div>
      <ul>
        <li className="iten_menu">
          <Link to="/perfil">
            <div>
              <span className="icon"><i className="bi bi-person-circle"></i></span>
              <span className="txt-link">Perfil</span>
            </div>
          </Link>
        </li>
        <li className="iten_menu">
          <Link to="/createProfile">
            <div>
              <span className="icon"><i className="bi bi-person-plus-fill"></i></span>
              <span className="txt-link">Cadastro de usuário</span>
            </div>
          </Link>
        </li>
        <li className="iten_menu">
          <Link to="/add">
            <div>
              <span className="icon"><i className="bi bi-file-earmark-plus-fill"></i></span>
              <span className="txt-link">Adição de arquivo</span>
            </div>
          </Link>
        </li>
        <li className="iten_menu">
          <Link to="/search">
            <div>
              <span className="icon"><i className="bi bi-search"></i></span>
              <span className="txt-link">Pesquisa e edição</span>
            </div>
          </Link>
        </li>
        <li className="iten_menu">
          <Link to="/lixeira">
            <div>
              <span className="icon"><i className="bi bi-trash"></i></span>
              <span className="txt-link">Lixeira</span>
            </div>
          </Link>
        </li>
        <li className="iten_menu">
          <div onClick={handleLogout} className="logout-link">
            <span className="icon"><i className="bi bi-box-arrow-in-left"></i></span>
            <span className="txt-link">Sair</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
