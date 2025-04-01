
import React from "react";
import './SearchDocument.css';
import Navbar from '../Navbar';


const SearhDocument = () => {
  return (
    <html> 
      <head>
        <title>PESQUISAR DOCUMENTO</title>
      </head> 
      <body>
        
        <Navbar />
        <div className="campoSearch">
          <h1>PESQUISA E EDIÇÃO</h1>
          <br />
          <label>Tipo de Arquivo:</label>
          <select>
            <option value="vazio">-</option>
            <option value="Corrente">Corrente</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Permanente">Permanente</option>
          </select>

          <label>Nome completo</label>
          <input type="text" placeholder="email" />

          <label>Setor/campus</label>
          <input type="text" placeholder="senha" />

          <label>E-mail</label>
          <input type="text" placeholder="nome" />

          <label>Telefone</label>
          <input type="text" placeholder="Telefone" />

          <label>portaria nº</label>
          <input type="text" placeholder="Portaria" />

          <label>Ano</label>
          <input type="text" placeholder="Ano" />

          <label>projeto pedagógico</label>
          <input type="text" placeholder="Projeto Pedagógico" />

          <label>Curso</label>
          <input type="text" placeholder="Curso" />

          <button>Pesquisar</button>
        </div>
      </body>
    </html>
  );
};

export default SearhDocument;
