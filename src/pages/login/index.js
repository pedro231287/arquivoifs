import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConnection";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"; // Importando Firestore
import './Login.css';

const Login = ({ setIsLoggedIn, setIsMaster }) => { // Adicionando setIsMaster como props
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const db = getFirestore(); // Instância do Firestore

  useEffect(() => {
    if (setIsLoggedIn) {
      navigate("/search");
    }
  }, [setIsLoggedIn, navigate]);

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
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário autenticado:", user);

      // Verificar se o usuário é master
      const masterQuery = query(collection(db, "master"), where("email", "==", email));
      const querySnapshot = await getDocs(masterQuery);

      if (!querySnapshot.empty) {
        setIsMaster(true); // Define como master se encontrado
      } else {
        setIsMaster(false); // Define como não master se não encontrado
      }

      setIsLoggedIn(true);
      navigate("/search");
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert("Erro ao fazer login: " + error.message);
    }
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
