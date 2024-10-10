
import React from "react";
import './ProfileCreator.css';
import Navbar from '../Navbar';

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
        <Navbar />

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
