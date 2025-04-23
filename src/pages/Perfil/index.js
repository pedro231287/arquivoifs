import React, { useState, useEffect } from "react";
import './Perfil.css';
//import Navbar from '../Navbar';

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConnection"; 
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";

const Perfil = () => {
  const [userData, setUserData] = useState({ nome: "", cpf: "", email: "" });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // Tenta buscar o usuário na coleção 'master'
          let docRef = doc(db, "master", user.uid);
          let docSnap = await getDoc(docRef);

          // Se não encontrar na coleção 'master', busca em 'normal_user'
          if (!docSnap.exists()) {
            docRef = doc(db, "normal_user", user.uid);
            docSnap = await getDoc(docRef);
          }

          // Se encontrou em uma das coleções, define os dados no estado
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("Nenhum documento encontrado!");
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (newPassword !== confirmNewPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // Reautentica o usuário com a senha atual
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Atualiza a senha para a nova
      await updatePassword(user, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      alert("Senha alterada com sucesso!");
    } catch (error) {
      console.error("Erro ao trocar a senha:", error);
      alert("Erro ao trocar a senha. Verifique se a senha atual está correta.");
    }
  };

  return (
    <html>
      <head>
        <title>CRIAR PERFIL</title>
      </head>
      <body>
        

        <div className="campoPerfil">
          <h1>Perfil de Usuário</h1>
          <div className="perfil">
            <h2>Dados Pessoais</h2>
            <div className="dados">
              <p>
                Nome: <span id="nome">{userData.nome}</span>
              </p>
              <p>
                CPF: <span id="cpf">{userData.cpf}</span>
              </p>
              <p>
                Email: <span id="email">{userData.email}</span>
              </p>
            </div>
            <hr />
            <h2>Trocar Senha</h2>
            <form onSubmit={handlePasswordChange}>
              <label>Senha atual</label>
              <input
                type="password"
                required
                id="currentPassword"
                placeholder="Senha atual"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <label>Nova senha</label>
              <input
                type="password"
                required
                id="newPassword"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <label>Confirmar nova senha</label>
              <input
                type="password"
                required
                id="confirmNewPassword"
                placeholder="Confirmar nova senha"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />

              <button id="trocar" type="submit">Trocar</button>
            </form>
            
          </div>
        </div>
      </body>
    </html>
  );
};

export default Perfil;
