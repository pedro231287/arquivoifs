import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConnection";
//import { getFirestore } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext"; // Importando o contexto de autenticação
import './Login.css';

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext); // Obtendo as funções do contexto
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  //const db = getFirestore(); // Instância do Firestore

  const changeInput = (event) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "senha") {
      setSenha(value);
    }
  };

  const enviar = async (event) => {
    event.preventDefault();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      // Autenticação com Firebase
      await signInWithEmailAndPassword(auth, email, senha);
      
      setIsLoggedIn(true); // Usuário logado com sucesso
      navigate("/search"); // Navega para a página de pesquisa
    } catch (error) {
      console.error("Erro na autenticação:", error);
      
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <div id="container">
      <div className="blocolateral">
        <div id="logo">
          <img id="ifs" src="/marca Dinove vertical branca 1.png" alt="marca" />
        </div>
        <div className="blocolateral_texto">
          Bem vindo
        </div>
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
              placeholder="Insira sua senha"
              type="password"
              value={senha}
              onChange={changeInput}
              required
            />
            <br />
            <button id="loginButton" type="submit">Acessar</button>
          </form>
          <div>
            recuperar senha
          </div>
        </div>
    </div>
  );
};

export default Login;
