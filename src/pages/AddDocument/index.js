import React, { useState, useEffect } from "react";
import './AddDocument.css';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConnection";
//import Navbar from '../Navbar';

const AddDocument = () => {
  const [codigos, setCodigos] = useState([]);
  const [codigoSelecionado, setCodigoSelecionado] = useState('');
  const [metadados, setMetadados] = useState({});
  const [document, setDocument] = useState({});

  useEffect(() => {
    const buscarCodigos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "codigos"));
        const codigosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCodigos(codigosData);
      } catch (error) {
        console.error("Erro ao buscar códigos:", error);
      }
    };

    buscarCodigos();
  }, []);

  useEffect(() => {
    const buscarMetadados = async () => {
      if (!codigoSelecionado) return;

      try {
        const q = query(collection(db, "metadados"), where("codigo", "==", codigoSelecionado));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const metadadosData = querySnapshot.docs[0].data();
          setMetadados(metadadosData);
          
          // Inicializa o estado do documento com campos vazios baseado nos metadados
          const camposIniciais = {};
          Object.keys(metadadosData).forEach(campo => {
            if (metadadosData[campo] === true) {
              camposIniciais[campo] = '';
            }
          });
          setDocument(camposIniciais);
        }
      } catch (error) {
        console.error("Erro ao buscar metadados:", error);
      }
    };

    buscarMetadados();
  }, [codigoSelecionado]);

  const changeInput = (event) => {
    setDocument({
      ...document,
      [event.target.id]: event.target.value
    });
  };

  const adcionar = async (event) => {
    event.preventDefault();

    try {
      const documentoParaAdicionar = {
        ...document,
        codigo: codigoSelecionado
      };

      await addDoc(collection(db, "arquivos"), documentoParaAdicionar);
      alert("Documento adicionado com sucesso!");
      
      // Limpa o formulário
      setCodigoSelecionado('');
      setMetadados({});
      setDocument({});
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <html>
      <head>
        <title>ADICIONAR DOCUMENTO</title>
      </head>
      <body>
        

        <div className="campoAdd">
          <h1>ADIÇÃO DE NOVO DOCUMENTO</h1>
          <br />
          <form onSubmit={adcionar}>
            <label>Selecione o Código</label>
            <select 
              value={codigoSelecionado} 
              onChange={(e) => setCodigoSelecionado(e.target.value)}
            >
              <option value="">Selecione um código</option>
              {codigos.map((codigo) => (
                <option key={codigo.id} value={codigo.codigo}>
                  {codigo.codigo}
                </option>
              ))}
            </select>

            {Object.entries(metadados).map(([campo, valor]) => (
              valor === true && (
                <div key={campo}>
                  <label>{campo.toUpperCase()}</label>
                  <input
                    id={campo}
                    type="text"
                    placeholder={campo.toUpperCase()}
                    value={document[campo] || ''}
                    onChange={changeInput}
                  />
                </div>
              )
            ))}

            <button type="submit">Adicionar</button>
          </form>
        </div>
      </body>
    </html>
  );
};

export default AddDocument;
