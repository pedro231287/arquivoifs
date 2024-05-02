
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
      this.state = { 
          cpf: "",
          senha: ""
          }
  }

  changeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
      });
  }

  enviar = (event) => {
      event.preventDefault(); 

      let user = {
        cpf: this.state.cpf,
        senha: this.state.senha
      };

      if (!user.cpf || !user.senha) {
        alert("Por favor, preencha todos os campos");
        return;
      }

      //alert(user.cpf + " " + user.senha);
  };

  render() {

    return (
      <body>
        
      <div id="container">
          <div id="back-img">
              <img id="note" src="/img-sipac.png" alt="imagem"></img>
          </div>
          <div id="asside">
              <div id="logo">
                  <img id="ifs" src="/brasao_ifs_vertical.png" alt="marca"></img>
              </div>
              <div id="formulario">
                  <form onSubmit={this.enviar}>
                      <input className="loginInput" placeholder="insira seu CPF" type="cpf" value={this.state.cpf} onChange={this.changeInput} required/><br/>
                      <input className="loginInput" placeholder="Digite sua senha" type="password" value={this.state.senha} onChange={this.changeInput} required/><br/>
                        <Link to="/search">
                          <button id="loginButton" type="submit">Entrar</button>
                        </Link>
                  </form>
              </div>
          </div>
      </div>
    
    </body>    
    );

  }

}

export default Login;
