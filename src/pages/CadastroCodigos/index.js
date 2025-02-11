
import React, { useState } from "react";
import './CadastroCodigo.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Navbar from '../Navbar';

const CadastroCodigo = () => {
  const [document, setDocument] = useState({
    codigo: '',
    descricao: '',
    corrente: '',
    intermediario: '',
    final: '',
    estrutural: '',
    fundo: '',
    especie: '',
    unidade: '',
  });

  const changeInput = (event) => {
    setDocument({
      ...document,
      [event.target.id]: event.target.value
    });
  };

  const adcionar = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "codigo"), {
        codigo: document.codigo,
        descricao: document.descricao,
        corrente: document.corrente,
        Intermediario: document.intermediario,
        final: document.final,
        estrutural: document.estrutural,
      });

      alert("Documento adicionado com sucesso!");
      setDocument({
        codigo: '',
        descricao: '',
        corrente: '',
        intermediario: '',
        final: '',
        estrutural: '',
      });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  const adcionar2 = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "fundo"), {
        fundo: document.fundo,
      });

      alert("Documento adicionado com sucesso!");
      setDocument({
        fundo: '',
      });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  const adcionar3 = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "especie"), {
        especie: document.especie,
      });

      alert("Documento adicionado com sucesso!");
      setDocument({
        especie: '',
      });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  const adcionar4 = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "unidade"), {
        unidade: document.unidade,
      });

      alert("Documento adicionado com sucesso!");
      setDocument({
        unidade: '',
      });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <html>
      <head>
        <title>ADCIONAR metadados</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body>

        <Navbar />

        <div className="campoAdd">
          <h1>Cadastro de código</h1>
          <br />
          <form onSubmit={adcionar}>
            
            <div>
              
              <div className="campoCadastro">
            
                <label>CÓDIGO</label>
                <input id="codigo" type="text" placeholder="Código" value={document.codigo} onChange={changeInput} />

                <label>DESCRIÇÃO</label>
                <input id="descricao" type="text" placeholder="Descrição" value={document.descricao} onChange={changeInput} />
                          
                <label> Temporalidade</label>

                <label>Fase Corrente:</label>                
                <input id="corrente" type="text" placeholder=" Fase Corrente" value={document.corrente} onChange={changeInput} />
                
                <label>Fase Intermediário:</label>                
                <input id="intermediario" type="text" placeholder="Fase Intermediário" value={document.intermediario} onChange={changeInput} />
              
                <label>Destinação final:</label>                
                <input id="final" type="text" placeholder="Destinação final" value={document.final} onChange={changeInput} />
              
              </div>
              
            </div>
            
            <div class="checkbox-item">

              <input type="checkbox" id="estrutural" name="estrutural" value= "estrutural" /> 
              <label for="estrutural"> Item estrutural</label>
            
            </div>
            
            <button type="submit">Cadastrar</button>
          
          </form>

        </div>

        <div className="campoAdd">
          <h1>Cadastro de fundo</h1>
          <br />
          <form onSubmit={adcionar2}>
            
            <div>
              
              <div className="campoCadastro">
            
                <label>Fundo</label>
                <input id="fundo" type="text" placeholder="Fundo" value={document.fundo} onChange={changeInput} />

              </div>
              
            </div>
            
            <button type="submit">Cadastrar</button>
          
          </form>

        </div>

        <div className="campoAdd">
          <h1>Cadastro de espécie</h1>
          <br />
          <form onSubmit={adcionar3}>
            
            <div>
              
              <div className="campoCadastro">
            
                <label>Espécie</label>
                <input id="especie" type="text" placeholder="especie" value={document.especie} onChange={changeInput} />

              </div>
              
            </div>
            
            <button type="submit">Cadastrar</button>
          
          </form>

        </div>

        <div className="campoAdd">
          <h1>Cadastro de Unidade</h1>
          <br />
          <form onSubmit={adcionar4}>
            
            <div>
            
                <label>Unidade</label>
                <input id="unidade" type="text" placeholder="unidade" value={document.unidade} onChange={changeInput} />
              
            </div>
            
            <button type="submit">Cadastrar</button>
          
          </form>

        </div>
      
      </body>
    
    </html>
  );
};

export default CadastroCodigo;
