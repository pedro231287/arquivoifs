
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SearchDocument.css';


class SearhDocument extends Component {

 

  render() {

    return (
<html> 
    <head>
        <title>PESQUISAR DOCUMENTO</title>
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
                    <li>
                        <Link to="/">
                            <div>
                                    <span class="icon"><i class="bi bi-file-earmark"></i></span>
                                    <span class="txt-link">Sair</span>
                            </div>
                        </Link>
                    </li>
            </ul>
        </nav>
        
        <div class="campoSearch">
            <h1>PESQUISA E EDIÇÃO</h1>
            
            <label>Nome completo</label>
            <input type="text" placeholder="email"/>
            
            <label>Setor/campus</label>
            <input type="text" placeholder="senha"/>
            
            <label>E-mail</label>
            <input type="text" placeholder="nome"/>
            
            <label>Telefone</label>
            <input type="text" placeholder="CFP"/>
            
            <label>Tipo de solicitação</label>
            <form>
                <input type = "radio" name = "subject" value = "Consulta"/>
                <input type = "radio" name = "subject" value = "Empréstimo"/>
                <input type = "radio" name = "subject" value = "Desarquivamento"/>
                <input type = "radio" name = "subject" value = "Solicitação de Cópia"/>
            </form>
                
            
            <label>portaria nº</label>
            <input type="text" placeholder="CFP"/>
            
            <label>Ano</label>
            <input type="text" placeholder="CFP"/>
            
            <label>referente à</label>
            <input type="text" placeholder="CFP"/>
                
            <label>projeto pedagógico</label>
            <input type="text" placeholder="CFP"/>
            
            <label>Curso</label>
            <input type="text" placeholder="CFP"/>
            
            <label>Forma preferencial de acesso ao documento</label>
            <form>
                <input type = "radio" name = "subject" value = "Correspondência eletrônica"/>
                <input type = "radio" name = "subject" value = "Presencial"/>
            </form>
            
                        

            <button>Pesquisar</button>
        </div>
        
    </body>
</html>

    );

  }

}

export default SearhDocument;