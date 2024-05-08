import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Lixeira.css';


class Lixeira extends Component {

 

  render() {

    return (
<html>
    <head>
        <title>CRIAR PERFIL</title>
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
        
        <div class="campoLixeira">
        <h1>Lixeira</h1>
        <table class="tabela-arquivos">
            <thead>
                <tr>
                    <th>Nome do Arquivo</th>
                    <th>Usuário</th>
                    <th>Data de Eliminação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Documento.txt</td>
                    <td>João Silva</td>
                    <td>2024-05-07</td>
                </tr>
                <tr>
                    <td>Foto.jpg</td>
                    <td>Maria Oliveira</td>
                    <td>2024-05-06</td>
                </tr>
                <tr>
                    <td>Planilha.xlsx</td>
                    <td>Pedro Souza</td>
                    <td>2024-05-05</td>
                </tr>
            </tbody>
        </table>
        <button id="limpar">Esvaziar</button>
        </div>
        
    </body>
</html>
    );

  }

}

export default Lixeira;