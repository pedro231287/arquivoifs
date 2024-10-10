
import React, { useState } from "react";
import './AddDocument.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Navbar from '../Navbar';

const AddDocument = () => {
  const [document, setDocument] = useState({
    fundo: '',
    unidade: '',
    especie: '',
    interessado: '',
    assuntoDetalhado: '',
    codigoClassificacao: '',
    caixa: '',
    prazoGuarda: '',
    destinacaoFinal: '',
    dataDestinacao: '',
    ordemDocumento: '',
    numeroDocumento: '',
    cpfCnpj: '',
    matriculaSiape: '',
    dataNascimento: '',
    anoIngressoDataAdmissao: '',
    nomeMae: '',
    curso: '',
    disciplinaProfessor: '',
    dataProducao: '',
    prestacaoContas: '',
    dataTransferencia: '',
    observacao: '',
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
      await addDoc(collection(db, "arquivo"), {
        Fundo: document.fundo,
        Unidade: document.unidade,
        Especie: document.especie,
        Interessado: document.interessado,
        AssuntoDetalhado: document.assuntoDetalhado,
        CodigoClassificacao: document.codigoClassificacao,
        Caixa: document.caixa,
        PrazoGuarda: document.prazoGuarda,
        DestinacaoFinal: document.destinacaoFinal,
        DataDestinacao: document.dataDestinacao,
        OrdemDocumento: document.ordemDocumento,
        NumeroDocumento: document.numeroDocumento,
        CpfCnpj: document.cpfCnpj,
        MatriculaSiape: document.matriculaSiape,
        DataNascimento: document.dataNascimento,
        AnoIngressoDataAdmissao: document.anoIngressoDataAdmissao,
        NomeMae: document.nomeMae,
        Curso: document.curso,
        DisciplinaProfessor: document.disciplinaProfessor,
        DataProducao: document.dataProducao,
        PrestacaoContas: document.prestacaoContas,
        DataTransferencia: document.dataTransferencia,
        Observacao: document.observacao,
      });

      alert("Documento adicionado com sucesso!");
      setDocument({
        fundo: '',
        unidade: '',
        especie: '',
        interessado: '',
        assuntoDetalhado: '',
        codigoClassificacao: '',
        caixa: '',
        prazoGuarda: '',
        destinacaoFinal: '',
        dataDestinacao: '',
        ordemDocumento: '',
        numeroDocumento: '',
        cpfCnpj: '',
        matriculaSiape: '',
        dataNascimento: '',
        anoIngressoDataAdmissao: '',
        nomeMae: '',
        curso: '',
        disciplinaProfessor: '',
        dataProducao: '',
        prestacaoContas: '',
        dataTransferencia: '',
        observacao: '',
      });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <html>
      <head>
        <title>ADCIONAR DOCUMENTO</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body>

        <Navbar />

        <div className="campoAdd">
          <h1>ADIÇÃO DE NOVO DOCUMENTO</h1>
          <br />
          <form onSubmit={adcionar}>
            <label>FUNDO</label>
            <input id="fundo" type="text" placeholder="Fundo" value={document.fundo} onChange={changeInput} />

            <label>UNIDADE</label>
            <input id="unidade" type="text" placeholder="Unidade" value={document.unidade} onChange={changeInput} />

            <label>ESPÉCIE</label>
            <input id="especie" type="text" placeholder="Espécie" value={document.especie} onChange={changeInput} />

            <label>INTERESSADO</label>
            <input id="interessado" type="text" placeholder="INTERESSADO" value={document.interessado} onChange={changeInput} />

            <label>ASSUNTO DETALHADO</label>
            <input id="assuntoDetalhado" type="text" placeholder="Assunto Detalhado" value={document.assuntoDetalhado} onChange={changeInput} />

            <label>CÓDIGO DE CLASSIFICAÇÃO</label>
            <input id="codigoClassificacao" type="text" placeholder="Código de Classificação" value={document.codigoClassificacao} onChange={changeInput} />

            <label>CAIXA</label>
            <input id="caixa" type="text" placeholder="CAIXA" value={document.caixa} onChange={changeInput} />

            <label>PRAZO DE GUARDA</label>
            <input id="prazoGuarda" type="text" placeholder="PRAZO DE GUARDA" value={document.prazoGuarda} onChange={changeInput} />

            <label>DESTINAÇÃO FINAL</label>
            <input id="destinacaoFinal" type="text" placeholder="DESTINAÇÃO FINAL" value={document.destinacaoFinal} onChange={changeInput} />

            <label>DATA DA DESTINAÇÃO</label>
            <input id="dataDestinacao" type="text" placeholder="DATA DA DESTINAÇÃO" value={document.dataDestinacao} onChange={changeInput} />

            <label>ORDEM DO DOCUMENTO</label>
            <input id="ordemDocumento" type="text" placeholder="ORDEM DO DOCUMENTO" value={document.ordemDocumento} onChange={changeInput} />

            <label>NÚMERO DO DOCUMENTO</label>
            <input id="numeroDocumento" type="text" placeholder="NÚMERO DO DOCUMENTO" value={document.numeroDocumento} onChange={changeInput} />

            <label>CPF/CNPJ</label>
            <input id="cpfCnpj" type="text" placeholder="CPF/CNPJ" value={document.cpfCnpj} onChange={changeInput} />

            <label>MATRICULA/SIAPE</label>
            <input id="matriculaSiape" type="text" placeholder="MATRICULA/SIAPE" value={document.matriculaSiape} onChange={changeInput} />

            <label>DATA DE NASCIMENTO</label>
            <input id="dataNascimento" type="text" placeholder="DATA DE NASCIMENTO" value={document.dataNascimento} onChange={changeInput} />

            <label>ANO DE INGRESSO/DATA DE ADMISSÃO</label>
            <input id="anoIngressoDataAdmissao" type="text" placeholder="ANO DE INGRESSO/DATA DE ADMISSÃO" value={document.anoIngressoDataAdmissao} onChange={changeInput} />

            <label>NOME DA MÃE</label>
            <input id="nomeMae" type="text" placeholder="NOME DA MÃE" value={document.nomeMae} onChange={changeInput} />

            <label>CURSO</label>
            <input id="curso" type="text" placeholder="CURSO" value={document.curso} onChange={changeInput} />

            <label>DISCIPLINA/PROFESSOR</label>
            <input id="disciplinaProfessor" type="text" placeholder="DISCIPLINA/PROFESSOR" value={document.disciplinaProfessor} onChange={changeInput} />

            <label>DATA DE PRODUÇÃO</label>
            <input id="dataProducao" type="text" placeholder="DATA DE PRODUÇÃO" value={document.dataProducao} onChange={changeInput} />

            <label>PRESTAÇÃO DE CONTAS</label>
            <input id="prestacaoContas" type="text" placeholder="PRESTAÇÃO DE CONTAS" value={document.prestacaoContas} onChange={changeInput} />

            <label>DATA DE TRANSFERÊNCIA</label>
            <input id="dataTransferencia" type="text" placeholder="DATA DE TRANSFERÊNCIA" value={document.dataTransferencia} onChange={changeInput} />

            <label>OBSERVAÇÃO</label>
            <input id="observacao" type="text" placeholder="OBSERVAÇÃO" value={document.observacao} onChange={changeInput} />

            <button type="submit">Adicionar</button>
          </form>
        </div>
      </body>
    </html>
  );
};

export default AddDocument;
