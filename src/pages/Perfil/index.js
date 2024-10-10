
import React from "react";
import './Perfil.css';
import Navbar from '../Navbar';

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
        <Navbar />

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
