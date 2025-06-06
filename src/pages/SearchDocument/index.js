import React, { useState } from "react";
import { db } from "../../firebaseConnection";
import { collection, query, where, getDocs} from "firebase/firestore";
import './SearchDocument.css';
//import Navbar from '../Navbar';

function SearchDocument() {
  const [fundo, setFundo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [unidade, setUnidade] = useState("");
  const [resultados, setResultados] = useState([]);

  const handlePesquisar = async () => {
    try {
      let ref = collection(db, "arquivos");
      let filtros = [];
  
      // Filtrar por código exato, se preenchido
      if (codigo.trim()) {
        filtros.push(where("codigo", "==", parseInt(codigo)));
      }
  
      // Filtrar por fundo (como prefixo), se preenchido
      if (fundo.trim()) {
        filtros.push(where("fundo", ">=", fundo));
        filtros.push(where("fundo", "<=", fundo + "\uf8ff"));
        
      }
  
      // Filtrar por unidade (como prefixo), se preenchido
      if (unidade.trim()) {
        filtros.push(where("unidade", ">=", unidade));
        filtros.push(where("unidade", "<=", unidade + "\uf8ff"));
      }
  
      // Monta a consulta com os filtros aplicáveis
      const consulta = filtros.length ? query(ref, ...filtros) : ref;
      const snap = await getDocs(consulta);
  
      const dados = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
  
      setResultados(dados);
    } catch (error) {
      console.error("Erro ao pesquisar:", error);
    }
  };
  
  
  return (
    <div className="forme">
      
      <h2>Pesquisa com Filtro Parcial</h2>

      <input
        placeholder="fundo"
        value={fundo}
        onChange={(e) => setFundo(e.target.value)}
      />
      <input
        placeholder="codigo"
        type="number"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <input
        placeholder="Unidade"
        value={unidade}
        onChange={(e) => setUnidade(e.target.value)}
      />

      <button onClick={handlePesquisar} style={{ display: "block", marginTop: 10 }}>
        Pesquisar
      </button>

      <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Caixa</th>
            <th>Unidade(setor)</th>
            <th>Assunto</th>
            <th>editar</th>
            <th>eliminar ou eliminado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">Nenhum resultado</td>
            </tr>
          ) : (
            resultados.map((item) => (
              <tr key={item.id}>
                <td>{item.fundo}</td>
                <td>{item.codigo}</td>
                <td>{item.unidade}</td>
                <th><button>editar</button></th>
                <th><button>Eliminar ou restaurar</button></th>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchDocument;
