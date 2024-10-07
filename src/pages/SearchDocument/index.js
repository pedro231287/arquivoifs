
import React from "react";
import { Link } from "react-router-dom";
import './SearchDocument.css';

const SearhDocument = () => {
  return (
    <html> 
      <head>
        <title>PESQUISAR DOCUMENTO</title>
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
        
        <div className="campoSearch">
          <h1>PESQUISA E EDIÇÃO</h1>
          <br />
          <label>Tipo de Arquivo:</label>
          <select>
            <option value="vazio">-</option>
            <option value="Corrente">Corrente</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Permanente">Permanente</option>
          </select>

          <label>Nome completo</label>
          <input type="text" placeholder="email" />

          <label>Setor/campus</label>
          <input type="text" placeholder="senha" />

          <label>E-mail</label>
          <input type="text" placeholder="nome" />

          <label>Telefone</label>
          <input type="text" placeholder="Telefone" />

          <label>portaria nº</label>
          <input type="text" placeholder="Portaria" />

          <label>Ano</label>
          <input type="text" placeholder="Ano" />

          <label>projeto pedagógico</label>
          <input type="text" placeholder="Projeto Pedagógico" />

          <label>Curso</label>
          <input type="text" placeholder="Curso" />

          <button>Pesquisar</button>
        </div>
      </body>
    </html>
  );
};

export default SearhDocument;
