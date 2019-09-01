import React, { Component } from 'react';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import PubSub from 'pubsub-js';

const TOPIC_AUTOR_CREATED = Symbol('topic_autor_created');


class FormularioAutor extends Component {

  constructor() {
    super();
    this.state = { autor: {
      nome:"",
      email: "",
      senha: ""
    } };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createAutor = this.createAutor.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    var obj = { autor: this.state.autor };
    obj.autor[name] = value;
    this.setState(obj)
    console.log(this.state);
  }

  createAutor(evt) {
    evt.preventDefault();
    fetch('http://localhost:8000/api/autores', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(this.state.autor)
    }).then(data => {
      data.json().then(created => {
        this.setState({ autor: {
          nome:"",
          email: "",
          senha: ""
        } })
        PubSub.publish(TOPIC_AUTOR_CREATED, created);
      })
    })
      .catch(error => {
        this.setState({
          error
        })
      });

  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.createAutor} method="post">
          <CustomInput type="text" id="nome" name="nome" value={this.state.autor.nome} onChange={this.handleInputChange} label="Nome" />
          <CustomInput type="text" id="email" name="email" value={this.state.autor.email} onChange={this.handleInputChange} label="Email" />
          <CustomInput type="password" id="senha" name="senha" value={this.state.autor.senha} onChange={this.handleInputChange} label="Senha" />
          <CustomButton label="Gravar" />
        </form>

      </div>

    );
  }
}

class TabelaAutores extends Component {

  constructor() {
    super();
    this.state = {
      autores: [],
      isLoading: true,
      error: null,
    };
    this.abortController = new window.AbortController();

  }

  componentDidMount() {

    PubSub.subscribe(TOPIC_AUTOR_CREATED, function (msg, data) {
      this.setState({ autores: this.state.autores.concat(data) });
    }.bind(this));

    fetch('http://localhost:8000/api/autores', {signal:this.abortController.signal})
      .then(response => response.json())
      .then(data => {
        this.setState({
          autores: data,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        })
      });

  }

  componentWillUnmount() {
    PubSub.unsubscribe(TOPIC_AUTOR_CREATED);
    this.abortController.abort();
  }

  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error.message}</p> : null}
        {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
            <table className="pure-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.autores.map(autor => {
                  return (
                    <tr key={autor.id}>
                      <td>{autor.nome}</td>
                      <td>{autor.email}</td>
                    </tr>
                  );
                })
                }

              </tbody>
            </table>
          )}
      </div>
    );
  }
}

export default class AutorBox extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
          <FormularioAutor />
          <TabelaAutores />
        </div>
      </div>
    );
  }

}


