
import React from "react";
import { Link } from "react-router-dom";
import './ProfileCreator.css';

const ProfileCreator = () => {
  return (
    <html>
      <head>
        <title>CRIAR PERFIL</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body>
        <nav className="menu_lateral">
          <div className="btn_expandir">
            <i className="bi bi-list"></i>
          </div>
          <ul>
            <li className="iten_menu">
              <Link to="/perfil">
                <div>
                  <span className="icon">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <span className="txt-link">Perfil</span>
                </div>
              </Link>
            </li>
            <li className="iten_menu">
              <Link to="/createProfile">
                <div>
                  <span className="icon">
                    <i className="bi bi-person-plus-fill"></i>
                  </span>
                  <span className="txt-link">Cadastro de usuário</span>
                </div>
              </Link>
            </li>
            <li className="iten_menu">
              <Link to="/add">
                <div>
                  <span className="icon">
                    <i className="bi bi-file-earmark-plus-fill"></i>
                  </span>
                  <span className="txt-link">Adição de arquivo</span>
                </div>
              </Link>
            </li>
            <li className="iten_menu">
              <Link to="/search">
                <div>
                  <span className="icon">
                    <i className="bi bi-search"></i>
                  </span>
                  <span className="txt-link">Pesquisa e edição</span>
                </div>
              </Link>
            </li>
            <li className="iten_menu">
              <Link to="/lixeira">
                <div>
                  <span className="icon">
                    <i className="bi bi-trash"></i>
                  </span>
                  <span className="txt-link">Lixeira</span>
                </div>
              </Link>
            </li>
            <li className="iten_menu">
              <Link to="/">
                <div>
                  <span className="icon">
                    <i className="bi bi-box-arrow-in-left"></i>
                  </span>
                  <span className="txt-link">Sair</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="campoCreate">
          <h1>CADASTRO DE USUÁRIOS</h1>
          <br />
          <label>Email</label>
          <input type="text" placeholder="email" />
          
          <label>Senha</label>
          <input type="text" placeholder="senha" />
          
          <label>Nome</label>
          <input type="text" placeholder="nome" />
          
          <label>CPF</label>
          <input type="text" placeholder="CPF" />
          
          <button>Criar</button>
        </div>
      </body>
    </html>
  );
};

export default ProfileCreator;
