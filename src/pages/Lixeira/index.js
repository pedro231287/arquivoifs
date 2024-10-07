import React from "react";
import { Link } from "react-router-dom";
import './Lixeira.css';

const Lixeira = () => {
  return (
    <html>
      <head>
        <title>CRIAR PERFIL</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
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
              <Link to="/">
                <div>
                  <span className="icon"><i className="bi bi-box-arrow-in-left"></i></span>
                  <span className="txt-link">Sair</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="campoLixeira">
          <h1>Lixeira</h1>
          <table className="tabela-arquivos">
            <thead>
              <tr>
                <th>Nome do Arquivo</th>
                <th>Usuário</th>
                <th>Data de Eliminação</th>
                <th>Restaurar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Documento.txt</td>
                <td>João Silva</td>
                <td>2024-05-07</td>
                <td>
                  <button className="restaurar">Restaurar</button>
                </td>
              </tr>
              <tr>
                <td>Foto.jpg</td>
                <td>Maria Oliveira</td>
                <td>2024-05-06</td>
                <td>
                  <button className="restaurar">Restaurar</button>
                </td>
              </tr>
              <tr>
                <td>Planilha.xlsx</td>
                <td>Pedro Souza</td>
                <td>2024-05-05</td>
                <td>
                  <button className="restaurar">Restaurar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button id="limpar">Esvaziar</button>
        </div>
      </body>
    </html>
  );
};

export default Lixeira;
