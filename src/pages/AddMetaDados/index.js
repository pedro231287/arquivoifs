import React, { useState, useEffect, useContext } from "react";
import './AddMetaDados.css';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Navbar from '../Navbar';
import { AuthContext } from "../../contexts/AuthContext";

const AddMetaDados = () => {
  const listRef = collection(db, "codigos");
  const { user } = useContext(AuthContext);
  const [loadCodigo, setLoadCodigo] = useState(true);
  const [codigo, setCodigo] = useState([]);
  const [codigoSelected, setCodigoSelected] = useState('');
  const [document, setDocument] = useState({
    fundo: false,
    unidade: false,
    especie: false,
    interessado: false,
    assuntoDetalhado: false,
    codigoClassificacao: false,
    caixa: false,
    prazoGuarda: false,
    destinacaoFinal: false,
    dataDestinacao: false,
    ordemDocumento: false,
    numeroDocumento: false,
    cpfCnpj: false,
    matriculaSiape: false,
    dataNascimento: false,
    anoIngressoDataAdmissao: false,
    nomeMae: false,
    curso: false,
    disciplinaProfessor: false,
    dataProducao: false,
    prestacaoContas: false,
    dataTransferencia: false,
    observacao: false,
    codigo: '',
  });

  const changeInput = (event) => {
    const { id, type, checked, value } = event.target;
    setDocument((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const adicionar = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "metadados"), document);
      alert("Documento adicionado com sucesso!");
      setDocument(Object.fromEntries(Object.keys(document).map(key => [key, typeof document[key] === 'boolean' ? false : ''])));
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  useEffect(() => {
    const loadCodigo = async () => {
      try {
        const querySnapshot = await getDocs(listRef);
        const lista = querySnapshot.docs.map(doc => ({ id: doc.id, codigo: doc.data().codigo }));
        if (lista.length) {
          setCodigo(lista);
          setCodigoSelected(lista[0].id);
          setDocument((prev) => ({ ...prev, codigo: lista[0].codigo }));
        } else {
          setCodigo([{ id: 1, codigo: "Fantasia" }]);
          setCodigoSelected("1");
          setDocument((prev) => ({ ...prev, codigo: "Fantasia" }));
        }
      } catch (error) {
        console.error("Erro ao buscar os códigos", error);
        setCodigo([{ id: 1, codigo: "Fantasia" }]);
        setCodigoSelected("1");
        setDocument((prev) => ({ ...prev, codigo: "Fantasia" }));
      } finally {
        setLoadCodigo(false);
      }
    };
    loadCodigo();
  }, []);

  const handleCodigoChange = (e) => {
    const selectedCodigo = codigo.find(item => item.id === e.target.value);
    setCodigoSelected(e.target.value);
    setDocument((prev) => ({
      ...prev,
      codigo: selectedCodigo ? selectedCodigo.codigo : '',
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="campoAdd">
        <h1>Adição de Metadados por Código</h1>
        <form onSubmit={adicionar}>
          <label htmlFor="opcoes">Localizar Código</label>
          {loadCodigo ? (
            <input type="text" disabled value="Carregando..." />
          ) : (
            <select value={codigoSelected} onChange={handleCodigoChange}>
              {codigo.map((item) => (
                <option key={item.id} value={item.id}>{item.codigo}</option>
              ))}
            </select>
          )}

          <label>Metadados</label>
          {Object.keys(document).filter(key => typeof document[key] === 'boolean').map((key) => (
            <div className="checkbox-item" key={key}>
              <input type="checkbox" id={key} checked={document[key]} onChange={changeInput} />
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            </div>
          ))}

          <div>
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMetaDados;


