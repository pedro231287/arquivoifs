
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './AddDocument.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConnection";


class AddDocument extends Component {

    constructor(props) {
        super(props);
          this.state = { 
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
              }
      }
    
      changeInput = (event) => {
        this.setState({
          [event.target.id]: event.target.value
          });
      }
    
      adcionar = async (event) => {
          event.preventDefault(); 
    
          let document = {
            fundo: this.state.fundo,
            unidade: this.state.unidade,
            especie: this.state.especie,
            interessado: this.state.interessado,
            assuntoDetalhado: this.state.assuntoDetalhado,
            codigoClassificacao: this.state.codigoClassificacao,
            caixa: this.state.caixa,
            prazoGuarda: this.state.prazoGuarda,
            destinacaoFinal: this.state.destinacaoFinal,
            dataDestinacao: this.state.dataDestinacao,
            ordemDocumento: this.state.ordemDocumento,
            numeroDocumento: this.state.numeroDocumento,
            cpfCnpj: this.state.cpfCnpj,
            matriculaSiape: this.state.matriculaSiape,
            dataNascimento: this.state.dataNascimento,
            anoIngressoDataAdmissao: this.state.anoIngressoDataAdmissao,
            nomeMae: this.state.nomeMae,
            curso: this.state.curso,
            disciplinaProfessor: this.state.disciplinaProfessor,
            dataProducao: this.state.dataProducao,
            prestacaoContas: this.state.prestacaoContas,
            dataTransferencia: this.state.dataTransferencia,
            observacao: this.state.observacao,
          };
    
//         const documentArray = JSON.stringify(document, null, 2)
//        alert(documentArray)

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
          })
          .then(() => {
            alert("Documento adicionado com sucesso!");
            this.setState({
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
          })
          .catch((error) => {
            alert("Algo deu errado tente novamente!")
          })

      }
      

 
  render() {

    return (
<html>
    <head>
        <title>ADCIONAR DOCUMENTO</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

    </head>
    <body>
    
        <nav class="menu_lateral">
            <div class="btn_expandir">
                <i class="bi bi-list"></i>
            </div>
            <ul>
                    <li class="iten_menu">
                        <Link to="/perfil">
                            <div>
                                    <span class="icon"><i class="bi bi-person-circle"></i></span>
                                    <span class="txt-link">Perfil</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/createProfile">
                            <div>
                                <span class="icon"><i class="bi bi-person-plus-fill"></i></span>
                                <span class="txt-link">Cadastro de usuário</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/add">
                            <div>
                                <span class="icon"><i class="bi bi-file-earmark-plus-fill"></i></span>
                                <span class="txt-link">Adição de arquivo</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/search">
                            <div>
                                <span class="icon"><i class="bi bi-search"></i></span>
                                <span class="txt-link">Pesquisa e edição</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/lixeira">
                            <div>
                                <span class="icon"><i class="bi bi-trash"></i></span>
                                <span class="txt-link">Lixeira</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/">
                            <div>
                                    <span class="icon"><i class="bi bi-box-arrow-in-left"></i></span>
                                    <span class="txt-link">Sair</span>
                            </div>
                        </Link>
                    </li>
                    
            </ul>
        </nav>
        
        <div class="campoAdd">
            
            <h1>ADIÇÃO DE NOVO DOCUMENTO</h1>
            <br/>
            <form onSubmit={this.adcionar}>
                <label>FUNDO</label>
                <input id="fundo" type="text" placeholder="Fundo" value={this.state.fundo} onChange={this.changeInput}/>
            
                <label>UNIDADE</label>
                <input id="unidade" type="text" placeholder="Unidade" value={this.state.unidade} onChange={this.changeInput}/>
            
                <label>ESPÉCIE</label>
                <input id="especie" type="text" placeholder="Espécie" value={this.state.especie} onChange={this.changeInput}/>
        
                <label>INTERESSADO</label>
                <input id="interessado" type="text" placeholder="INTERESSADO" value={this.state.interessado} onChange={this.changeInput}/>
            
                <label>ASSUNTO DETALHADO</label>
                <input id="assuntoDetalhado" type="text" placeholder="Assunto Detalhado" value={this.state.assuntoDetalhado} onChange={this.changeInput}/>
            
                <label>CÓDIGO DE CLASSIFICAÇÃO</label>
                <input id="codigoClassificacao" type="text" placeholder="Código de Classificação" value={this.state.codigoClassificacao} onChange={this.changeInput}/>
            
                <label>CAIXA</label>    
                <input id="caixa" type="text" placeholder="CAIXA" value={this.state.caixa} onChange={this.changeInput}/>
        
                <label>PRAZO DE GUARDA</label>
                <input id="prazoGuarda" type="text" placeholder="PRAZO DE GUARDA" value={this.state.prazoGuarda} onChange={this.changeInput}/>
            
                <label>DESTINAÇÃO FINAL</label>
                <input id="destinacaoFinal" type="text" placeholder="DESTINAÇÃO FINAL" value={this.state.destinacaoFinal} onChange={this.changeInput}/>
            
                <label>DATA DA DESTINAÇÃO</label>
                <input id="dataDestinacao" type="text" placeholder="DATA DA DESTINAÇÃO" value={this.state.dataDestinacao} onChange={this.changeInput}></input>
        
                <label>ORDEM DO DOCUMENTO</label>
                <input id="ordemDocumento" type="text" placeholder="ORDEM DO DOCUMENTO" value={this.state.ordemDocumento} onChange={this.changeInput}></input>
            
                <label>NÚMERO DO DOCUMENTO</label>
                <input id="numeroDocumento" type="text" placeholder="NÚMERO DO DOCUMENTO" value={this.state.numeroDocumento} onChange={this.changeInput}></input>
            
                <label>CPF/CNPJ</label>
                <input id="cpfCnpj" type="text" placeholder="CPF/CNPJ" value={this.state.cpfCnpj} onChange={this.changeInput}></input>
            
                <label>MATRICULA/SIAPE</label>
                <input id="matriculaSiape" type="text" placeholder="MATRICULA/SIAPE" value={this.state.matriculaSiape} onChange={this.changeInput}></input>
        
                <label>DATA DE NASCIMENTO</label>
                <input id="dataNascimento" type="text" placeholder="DATA DE NASCIMENTO" value={this.state.dataNascimento} onChange={this.changeInput}></input>
            
                <label>ANO DE INGRESSO/DATA DE ADMISSÃO</label>
                <input id="anoIngressoDataAdmissao" type="text" placeholder="ANO DE INGRESSO/DATA DE ADMISSÃO" value={this.state.anoIngressoDataAdmissao} onChange={this.changeInput}></input>
            
                <label>NOME DA MÃE</label>
                <input id="nomeMae" type="text" placeholder="NOME DA MÃE" value={this.state.nomeMae} onChange={this.changeInput}></input>
            
                <label>CURSO</label>
                <input id="curso" type="text" placeholder="CURSO" value={this.state.curso} onChange={this.changeInput}></input>
            
                <label>DISCIPLINA/PROFESSOR</label>
                <input id="disciplinaProfessor" type="text" placeholder="DISCIPLINA/PROFESSOR" value={this.state.disciplinaProfessor} onChange={this.changeInput}></input>
            
                <label>DATA DE PRODUÇÃO</label>
                <input id="dataProducao" type="text" placeholder="DATA DE PRODUÇÃO" value={this.state.dataProducao} onChange={this.changeInput}></input>
        
                <label>PRESTAÇÃO DE CONTAS</label>
                <input id="prestacaoContas" type="text" placeholder="PRESTAÇÃO DE CONTAS" value={this.state.prestacaoContas} onChange={this.changeInput}></input>
            
                <label>DATA DE TRANSFERÊNCIA</label>
                <input id="dataTransferencia" type="text" placeholder="DATA DE TRANSFERÊNCIA" value={this.state.dataTransferencia} onChange={this.changeInput}></input>
            
                <label>OBSERVAÇÃO</label>
                <input id="observacao" type="text" placeholder="OBSERVAÇÃO" value={this.state.observacao} onChange={this.changeInput}></input>
            
        
                <button type="submit">Adcionar</button>
            </form>
        </div>
        
    </body>
</html>

    );

  }

}

export default AddDocument;
