
import React from "react";
import { Link } from "react-router-dom";
import './Perfil.css';

const Perfil = () => {

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

        <div className="campoPerfil">
          <h1>Perfil de Usuário</h1>
          <div className="perfil">
            <h2>Dados Pessoais</h2>
            <div className="dados">
              <p>
                Nome: <span id="nome">João Costa Silva</span>
              </p>
              <p>
                Email: <span id="email">jcs@gmail.com</span>
              </p>
            </div>
            <hr />
            <h2>Trocar Senha</h2>
            <label>Senha atual</label>
            <input
              type="password"
              id="password"
              placeholder="Senha atual"
            ></input>

            <label>Nova senha</label>
            <input type="password" id="password" placeholder="Nova senha"></input>

            <label>Confirmar nova senha</label>
            <input
              type="password"
              id="password"
              placeholder="Confirmar nova senha"
            ></input>

            <button id="trocar" type="submit">
              Trocar
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Perfil;
