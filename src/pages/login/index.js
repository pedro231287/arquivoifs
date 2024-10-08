
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate para redirecionamento
import { signInWithEmailAndPassword } from "firebase/auth"; // Importando a função de login do Firebase
import { auth } from "../../firebaseConnection"; // Importando corretamente
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(""); // Mudando CPF para email
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // Para redirecionar após o login

  const changeInput = (event) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "senha") {
      setSenha(value);
    }
  };

  const enviar = (event) => {
    event.preventDefault();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Autenticação com Firebase
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Sucesso na autenticação
        const user = userCredential.user;
        console.log("Usuário autenticado:", user);
        navigate("/search"); // Redireciona para a página após login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro na autenticação:", errorCode, errorMessage);
        alert("Erro ao fazer login: " + errorMessage);
      });
  };

  return (
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
              id="email"
              className="loginInput"
              placeholder="Insira seu email"
              type="email"
              value={email}
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
            <button id="loginButton" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
