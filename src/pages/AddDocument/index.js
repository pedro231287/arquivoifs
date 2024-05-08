
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './AddDocument.css';


class AddDocument extends Component {

 
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
                        <Link to="/createProfile">
                            <div>
                                <span class="icon"><i class="bi bi-house"></i></span>
                                <span class="txt-link">Cadastro de usuário</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/add">
                            <div>
                                <span class="icon"><i class="bi bi-file-earmark"></i></span>
                                <span class="txt-link">Adição de arquivo</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/search">
                            <div>
                                <span class="icon"><i class="bi bi-file-earmark"></i></span>
                                <span class="txt-link">Pesquisa e edição</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/lixeira">
                            <div>
                                <span class="icon"><i class="bi bi-file-earmark"></i></span>
                                <span class="txt-link">Lixeira</span>
                            </div>
                        </Link>
                    </li>
                    <li class="iten_menu">
                        <Link to="/">
                            <div>
                                    <span class="icon"><i class="bi bi-file-earmark"></i></span>
                                    <span class="txt-link">Sair</span>
                            </div>
                        </Link>
                    </li>
            </ul>
        </nav>
        
        <div class="campoAdd">
            
            <h1>ADIÇÃO DE NOVO DOCUMENTO</h1>
            <br/>
                <label>FUNDO</label>
                <input type="text" placeholder="Fundo"/>
            
                <label>UNIDADE</label>
                <input type="text" placeholder="Unidade"/>
            
                <label>ESPÉCIE</label>
                <input type="text" placeholder="Unidade"/>
        
                <label>INTERESSADO</label>
                <input type="text" placeholder="INTERESSADO"/>
            
                <label>ASSUNTO DETALHADO</label>
                <input type="text" placeholder="INTERESSADO"/>
            
                <label>CÓDIGO DE CLASSIFICAÇÃO</label>
                <input type="text" placeholder="INTERESSADO"/>
            
                <label>CAIXA</label>    
                <input type="text" placeholder="CAIXA"/>
        
                <label>PRAZO DE GUARDA</label>
                <input type="text" placeholder="PRAZO DE GUARDA"/>
            
                <label>DESTINAÇÃO FINAL</label>
                <input type="text" placeholder="DESTINAÇÃO FINAL"/>
            
                <label>DATA DA DESTINAÇÃO</label>
                <input type="text" placeholder="DATA DA DESTINAÇÃO"></input>
        
                <label>ORDEM DO DOCUMENTO</label>
                <input type="text" placeholder="ORDEM DO DOCUMENTO"></input>
            
                <label>NÚMERO DO DOCUMENTO</label>
                <input type="text" placeholder="NÚMERO DO DOCUMENTO"></input>
            
                <label>CPF/CNPJ</label>
                <input type="text" placeholder="CPF/CNPJ"></input>
            
                <label>MATRICULA/SIAPE</label>
                <input type="text" placeholder="MATRICULA/SIAPE"></input>
        
                <label>DATA DE NASCIMENTO</label>
                <input type="text" placeholder="DATA DE NASCIMENTO"></input>
            
                <label>ANO DE INGRESSO/DATA DE ADMISSÃO</label>
                <input type="text" placeholder="ANO DE INGRESSO/DATA DE ADMISSÃO"></input>
            
                <label>NOME DA MÃE</label>
                <input type="text" placeholder="NOME DA MÃE"></input>
            
                <label>CURSO</label>
                <input type="text" placeholder="CURSO"></input>
            
                <label>DISCIPLINA/PROFESSOR</label>
                <input type="text" placeholder="DISCIPLINA/PROFESSOR"></input>
            
                <label>DATA DE PRODUÇÃO</label>
                <input type="text" placeholder="DATA DE PRODUÇÃO"></input>
        
                <label>PRESTAÇÃO DE CONTAS</label>
                <input type="text" placeholder="PRESTAÇÃO DE CONTAS"></input>
            
                <label>DATA DE TRANSFERÊNCIA</label>
                <input type="text" placeholder="DATA DE TRANSFERÊNCIA"></input>
            
                <label>OBSERVAÇÃO</label>
                <input type="text" placeholder="OBSERVAÇÃO"></input>
            
        
            <button>Criar</button>
            
        </div>
        
    </body>
</html>

    );

  }

}

export default AddDocument;