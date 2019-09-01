import React, { Component } from 'react';
import CustomInput from './components/CustomInput';
import CustomSelect from './components/CustomSelect';
import CustomButton from './components/CustomButton';
import PubSub from 'pubsub-js';

const TOPIC_LIVRO_CREATED = Symbol('topic_livro_created');


class FormularioLivro extends Component {

  constructor() {
    super();
    this.state = {
      livro: {
        autor:{id:0},
        titulo: "",
        preco: ""
      },
      autores: {},
      isLoading: true,
      error: false
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    var obj = { livro: this.state.livro };
    this.setPathProperty(name,obj.livro, value);
    this.setState(obj)
    console.log(this.state);
  }

  setPathProperty(path,obj,value) {
    let pathArray = path.split('.');
    let schema = obj;
    let len = pathArray.length;
    for (let i = 0; i < len-1; i++) {
        let elem = pathArray[i];
        if(!schema[elem]){
            schema[elem] = {};
        } 
        schema = schema[elem];
    }
    schema[pathArray[len-1]] = value;
  }

  componentDidMount() {

    fetch('http://localhost:8000/api/autores')
      .then(response => response.json())
      .then(data => {
        let autores = [];
        data.forEach(autor => {
          autores.push({
            id:autor.id,
            name:autor.nome
          })
        })
        this.setState({
          autores: autores,
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

  createLivro = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:8000/api/livros', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(this.state.livro)
    }).then(data => {
      data.json().then(created => {
        this.setState({
          livro: {
            autor:{id:0},
            titulo: "",
            preco: ""
          }
        })
        PubSub.publish(TOPIC_LIVRO_CREATED, created);
      });
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
        {this.state.error ? <p>{this.state.error.message}</p> : null}
        {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
            <form className="pure-form pure-form-aligned" onSubmit={this.createLivro} method="post">
              <CustomSelect id="autor" name="autor.id" value={this.state.livro.autor.id} onChange={this.handleInputChange} label="Autor" list={this.state.autores} />
              <CustomInput type="text" id="titulo" name="titulo" value={this.state.livro.titulo} onChange={this.handleInputChange} label="Título" />
              <CustomInput type="text" id="preco" name="preco" value={this.state.livro.preco} onChange={this.handleInputChange} label="Preço" />
              <CustomButton label="Gravar" />

            </form>
          )}
      </div>

    );
  }
}

class TabelaLivros extends Component {

  constructor() {
    super();
    this.state = {
      livros: [],
      isLoading: true,
      error: null,
    };

    PubSub.subscribe(TOPIC_LIVRO_CREATED, function (msg, data) {
      this.fetchLivros();
    }.bind(this));

  }

  componentDidMount() {
    this.fetchLivros();
  }

  fetchLivros(){
    fetch('http://localhost:8000/api/livros')
    .then(response => response.json())
    .then(data => {
      this.setState({
        livros: data,
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
                  <th>Autor</th>
                  <th>Título</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {this.state.livros.map(livro => {
                  return (
                    <tr key={livro.id}>
                      <td>{livro.autor.nome}</td>
                      <td>{livro.titulo}</td>
                      <td>{livro.preco}</td>
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

export default class LivroBox extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>Cadastro de Livros</h1>
        </div>
        <div className="content" id="content">
          <FormularioLivro />
          <TabelaLivros />
        </div>
      </div>
    );
  }

}


