
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Perfil.css';


class Perfil extends Component {

 

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
        
        <div class="campoPerfil">
            <h1>Perfil de Usuário</h1>
            <div class="perfil">
                <h2>Dados Pessais</h2>
                <div className="dados">
                <p>Nome: <span id="nome">João Costa Silva</span></p>
                <p>Email: <span id="email">jcs@gmail.com</span></p>
                </div>
                <hr/>
                <h2>Trocar Senha</h2>
                <label>Senha atual</label>
                <input type="password" id="password" placeholder="Senha atual"></input>

                <label>Nova senha</label>
                <input type="password" id="password" placeholder="Nova senha"></input>

                <label>Confirmar nova senha</label>
                <input type="password" id="password" placeholder="Confirmar nova senha"></input>

                <button id="trocar" type="submit">Trocar</button>
            </div>
        </div>
        
    </body>
</html>
    );

  }

}

export default Perfil;