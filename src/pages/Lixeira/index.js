import React from "react";
import './Lixeira.css';
//import Navbar from '../Navbar';

const Lixeira = () => {
  return (
    <html>
      <head>
        <title>CRIAR PERFIL</title>
      </head>
      <body>
       

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
