
import React, { useState } from "react";
import './AddMetaDados.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Navbar from '../Navbar';

const AddMetaDados = () => {
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
    codigo: '',
    descricao: '',
    corrente: '',
    intermediario: '',
    final: '',
    estrutural: '',
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
        codigo: document.codigo,
        descricao: document.descricao,
        corrente: document.corrente,
        Intermediario: document.intermediario,
        final: document.final,
        estrutural: document.estrutural,
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

  return (
    <html>
      <head>
        <title>ADCIONAR metadados</title>
      </head>
      <body>

        <Navbar />

        <div className="campoAdd">
          
          <h1>Adição de metadados por código</h1>
          
          <form onSubmit={adcionar}>
        
              <label for="opcoes">Loclizar código</label>
              <select id="opcoes" name="opcoes">
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </select>
              
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

            <div class="checkbox-item">

              <input type="checkbox" id="estrutural" name="estrutural" value="estrutural"/> 
              <label for="estrutural"> Item estrutural</label>
            
            </div>
            
            <div class="checkbox-container">
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="fundo" name="fundo" value="fundo"/> 
                <label for="fundo"> Fundo</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="unidade" name="unidade" value="unidade"/> 
                <label for="unidade"> Unidade</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="especie" name="especie" value="especie"/> 
                <label for="especie"> Espécie</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="interessado" name="interessado" value="interessado"/> 
                <label for="interessado"> Interessado</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="assuntoDetalhado" name="assuntoDetalhado" value="assuntoDetalhado"/> 
                <label for="assuntoDetalhado"> Assunto Detalhado</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="codigoClassificacao" name="codigoClassificacao" value="codigoClassificacao"/> 
                <label for="codigoClassificacao"> Código Classificação</label>
            
              </div>
            
              <div class="checkbox-item">
                <input type="checkbox" id="caixa" name="caixa" value="caixa"/> 
                <label for="caixa"> Caixa</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="prazoGuarda" name="prazoGuarda" value="prazoGuarda"/> 
                <label for="prazoGuarda"> Prazo Guarda</label>
            
              </div>
            
              <div class="checkbox-item">
                <input type="checkbox" id="destinacaoFinal" name="destinacaoFinal" value="destinacaoFinal"/> 
                <label for="destinacaoFinal"> Destinação Final</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="dataDestinacao" name="dataDestinacao" value="dataDestinacao"/> 
                <label for="dataDestinacao"> Data Destinação</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="ordemDocumento" name="ordemDocumento" value="ordemDocumento"/> 
                <label for="ordemDocumento"> Ordem Documento</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="numeroDocumento" name="numeroDocumento" value="numeroDocumento"/> 
                <label for="numeroDocumento"> Número Documento</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="cpfCnpj" name="cpfCnpj" value="cpfCnpj"/> 
                <label for="cpfCnpj"> CPF/CNPJ</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="matriculaSiape" name="matriculaSiape" value="matriculaSiape"/> 
                <label for="matriculaSiape"> Matrícula SIAPE</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="dataNascimento" name="dataNascimento" value="dataNascimento"/> 
                <label for="dataNascimento"> Data Nascimento</label>
            
              </div>
            
              <div class="checkbox-item">
                <input type="checkbox" id="anoIngressoDataAdmissao" name="anoIngressoDataAdmissao" value="anoIngressoDataAdmissao"/> 
                <label for="anoIngressoDataAdmissao"> Ano Ingresso/Data Admissão</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="nomeMae" name="nomeMae" value="nomeMae"/> 
                <label for="nomeMae"> Nome Mãe</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="curso" name="curso" value="curso"/> 
                <label for="curso"> Curso</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="disciplinaProfessor" name="disciplinaProfessor" value="disciplinaProfessor"/> 
                <label for="disciplinaProfessor"> Disciplina/Professor</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="dataProducao" name="dataProducao" value="dataProducao"/> 
                <label for="dataProducao"> Data Produção</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="prestacaoContas" name="prestacaoContas" value="prestacaoContas"/> 
                <label for="prestacaoContas"> Prestação de Contas</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="dataTransferencia" name="dataTransferencia" value="dataTransferencia"/> 
                <label for="dataTransferencia"> Data Transferência</label>
            
              </div>
            
              <div class="checkbox-item">
            
                <input type="checkbox" id="observacao" name="observacao" value="observacao"/> 
                <label for="observacao"> Observação</label>
            
              </div>

                </div>
            
            <div>
            
              <button type="submit">Alterar</button>
              <button type="submit">Excluir</button>
            
            </div>
        
          </form>
        </div>
      </body>
    </html>
  );
};

export default AddMetaDados;
