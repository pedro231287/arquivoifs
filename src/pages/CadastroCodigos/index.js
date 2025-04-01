import React, { useState } from "react";
import './CadastroCodigo.css';
import { addDoc, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Navbar from '../Navbar';

const CadastroCodigo = () => {
  const [tipoCadastro, setTipoCadastro] = useState('');
  const [formData, setFormData] = useState({
    codigo: {
      codigo: '',
      descricao: '',
      corrente: '',
      intermediario: '',
      final: '',
      estrutural: false
    },
    fundo: {
      fundo: ''
    },
    especie: {
      especie: ''
    },
    unidade: {
      unidade: ''
    }
  });
  const [mensagem, setMensagem] = useState('');
  const [itemExistente, setItemExistente] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);

  const tiposCadastro = [
    { id: 'codigo', nome: 'Código' },
    { id: 'fundo', nome: 'Fundo' },
    { id: 'especie', nome: 'Espécie' },
    { id: 'unidade', nome: 'Unidade' }
  ];

  const handleTipoChange = (e) => {
    const tipo = e.target.value;
    setTipoCadastro(tipo);
    setMensagem('');
    setItemExistente(null);
    setModoEdicao(false);
  };

  const changeInput = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [tipoCadastro]: {
        ...prev[tipoCadastro],
        [id]: type === 'checkbox' ? checked : value
      }
    }));
  };

  const verificarExistencia = async () => {
    const valorBusca = formData[tipoCadastro][tipoCadastro];
    if (!valorBusca) return false;

    const collectionRef = collection(db, tipoCadastro + 's');
    const q = query(collectionRef, where(tipoCadastro, '==', valorBusca));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      setItemExistente(doc);
      setMensagem(`Este ${tipoCadastro} já existe. Deseja alterá-lo?`);
      return true;
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (modoEdicao && itemExistente) {
      try {
        await updateDoc(doc(db, tipoCadastro + 's', itemExistente.id), formData[tipoCadastro]);
        setMensagem(`${tipoCadastro} atualizado com sucesso!`);
        setModoEdicao(false);
        setItemExistente(null);
        limparFormulario();
      } catch (error) {
        setMensagem("Erro ao atualizar o documento!");
      }
    } else {
      const existe = await verificarExistencia();
      if (!existe) {
        try {
          await addDoc(collection(db, tipoCadastro + 's'), formData[tipoCadastro]);
          setMensagem(`${tipoCadastro} cadastrado com sucesso!`);
          limparFormulario();
        } catch (error) {
          setMensagem("Erro ao cadastrar o documento!");
        }
      }
    }
  };

  const limparFormulario = () => {
    setFormData(prev => ({
      ...prev,
      [tipoCadastro]: Object.keys(prev[tipoCadastro]).reduce((acc, key) => {
        acc[key] = key === 'estrutural' ? false : '';
        return acc;
      }, {})
    }));
  };

  const confirmarEdicao = () => {
    setModoEdicao(true);
    setMensagem('');
  };

  return (
    <div>
      <Navbar />
      
      <div className="campoAdd">
        <h1>Cadastro</h1>
        
        <select 
          value={tipoCadastro} 
          onChange={handleTipoChange}
          className="tipo-select"
        >
          <option value="">Selecione o tipo de cadastro</option>
          {tiposCadastro.map(tipo => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </option>
          ))}
        </select>

        {tipoCadastro && (
          <form onSubmit={handleSubmit}>
            <div className="campoCadastro">
              {tipoCadastro === 'codigo' && (
                <>
                  <label>CÓDIGO</label>
                  <input 
                    id="codigo" 
                    type="text" 
                    placeholder="Código" 
                    value={formData.codigo.codigo} 
                    onChange={changeInput} 
                    required 
                  />

                  <label>DESCRIÇÃO</label>
                  <input 
                    id="descricao" 
                    type="text" 
                    placeholder="Descrição" 
                    value={formData.codigo.descricao} 
                    onChange={changeInput} 
                    required 
                  />
                              
                  <label>Temporalidade</label>

                  <label>Fase Corrente:</label>                
                  <input 
                    id="corrente" 
                    type="text" 
                    placeholder="Fase Corrente" 
                    value={formData.codigo.corrente} 
                    onChange={changeInput} 
                    required 
                  />
                    
                  <label>Fase Intermediário:</label>                
                  <input 
                    id="intermediario" 
                    type="text" 
                    placeholder="Fase Intermediário" 
                    value={formData.codigo.intermediario} 
                    onChange={changeInput} 
                    required 
                  />
                  
                  <label>Destinação final:</label>                
                  <input 
                    id="final" 
                    type="text" 
                    placeholder="Destinação final" 
                    value={formData.codigo.final} 
                    onChange={changeInput} 
                    required 
                  />
                  
                  <div className="checkbox-item">
                    <input 
                      type="checkbox" 
                      id="estrutural" 
                      checked={formData.codigo.estrutural} 
                      onChange={changeInput}
                    /> 
                    <label htmlFor="estrutural">Item estrutural</label>
                  </div>
                </>
              )}

              {tipoCadastro === 'fundo' && (
                <>
                  <label>Fundo</label>
                  <input 
                    id="fundo" 
                    type="text" 
                    placeholder="Fundo" 
                    value={formData.fundo.fundo} 
                    onChange={changeInput} 
                    required 
                  />
                </>
              )}

              {tipoCadastro === 'especie' && (
                <>
                  <label>Espécie</label>
                  <input 
                    id="especie" 
                    type="text" 
                    placeholder="Espécie" 
                    value={formData.especie.especie} 
                    onChange={changeInput} 
                    required 
                  />
                </>
              )}

              {tipoCadastro === 'unidade' && (
                <>
                  <label>Unidade</label>
                  <input 
                    id="unidade" 
                    type="text" 
                    placeholder="Unidade" 
                    value={formData.unidade.unidade} 
                    onChange={changeInput} 
                    required 
                  />
                </>
              )}

              {mensagem && (
                <div className="mensagem">
                  {mensagem}
                  {itemExistente && !modoEdicao && (
                    <button type="button" onClick={confirmarEdicao}>
                      Sim, alterar
                    </button>
                  )}
                </div>
              )}

              <button type="submit">
                {modoEdicao ? 'Atualizar' : 'Cadastrar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CadastroCodigo;
