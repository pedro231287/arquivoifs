
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const changeInput = (event) => {
    const { id, value } = event.target;
    if (id === "cpf") {
      setCpf(value);
    } else if (id === "senha") {
      setSenha(value);
    }
  };

  const enviar = (event) => {
    event.preventDefault();

    let user = {
      cpf: cpf,
      senha: senha,
    };

    if (!user.cpf || !user.senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Lógica de envio pode ser implementada aqui
    // alert(user.cpf + " " + user.senha);
  };

  return (
    <body>
      <div id="container">
        <div id="back-img">
          <img id="note" src="/img-sipac.png" alt="imagem" />
        </div>
        <div id="asside">
          <div id="logo">
            <img id="ifs" src="/brasao_ifs_vertical.png" alt="marca" />
          </div>
          <div id="formulario">
            <form onSubmit={enviar}>
              <input
                id="cpf"
                className="loginInput"
                placeholder="insira seu CPF"
                type="cpf"
                value={cpf}
                onChange={changeInput}
                required
              />
              <br />
              <input
                id="senha"
                className="loginInput"
                placeholder="Digite sua senha"
                type="password"
                value={senha}
                onChange={changeInput}
                required
              />
              <br />
              <Link to="/search">
                <button id="loginButton" type="submit">
                  Entrar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
