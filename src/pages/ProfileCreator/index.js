import React, { useState } from "react";
import './ProfileCreator.css';
import Navbar from '../Navbar';
import { auth, db } from "../../firebaseConnection"; // Certifique-se que você está importando corretamente
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore methods para criar documentos

const ProfileCreator = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "senha") {
      setSenha(value);
    } else if (id === "nome") {
      setNome(value);
    } else if (id === "cpf") {
      setCpf(value);
    }
  };

  const handleCreateUser = async () => {
    if (!email || !senha || !nome || !cpf) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      // Criar o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvar o UID do novo usuário na coleção "normal_user" no Firestore
      await setDoc(doc(db, "normal_user", user.uid), {
        email: email,
        nome: nome,
        cpf: cpf,
        createdAt: new Date()
      });

      alert("Usuário criado com sucesso!");
      setEmail("");
      setSenha("");
      setNome("");
      setCpf("");
    } catch (error) {
      console.error("Erro ao criar usuário: ", error);
      alert("Erro ao criar usuário: " + error.message);
    }
  };

  return (
    <html>
      <head>
        <title>CRIAR PERFIL</title>
      </head>
      <Navbar />
      <div className="campoCreate">
        <h1>CADASTRO DE USUÁRIOS</h1>
        <br />
        <label>Email</label>
        <input type="text" placeholder="email" value={email} onChange={handleChange} id="email" />

        <label>Senha</label>
        <input type="password" placeholder="senha" value={senha} onChange={handleChange} id="senha" />

        <label>Nome</label>
        <input type="text" placeholder="nome" value={nome} onChange={handleChange} id="nome" />

        <label>CPF</label>
        <input type="text" placeholder="CPF" value={cpf} onChange={handleChange} id="cpf" />

        <button onClick={handleCreateUser}>Criar</button>
      </div>
    </html>
  );
};

export default ProfileCreator;
