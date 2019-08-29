import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      error: null,
      autores: []
    };
    this.createAutor = this.createAutor.bind(this);
  }


  componentDidMount() {

    fetch('http://localhost:8000/api/autores')
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
    if (this._asyncRequest) {
      this._asyncRequest.abort();
    }
  }

  createAutor(evt){
    evt.preventDefault();
    console.log("data sent");
    console.log(this);
  }

  render() {
    const { isLoading, autores, error } = this.state;
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>

          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.createAutor}>
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input id="senha" type="password" name="senha" />
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                </div>
              </form>

            </div>
            <div>
              {error ? <p>{error.message}</p> : null}
              {isLoading ? (
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
                      {autores.map(autor => {
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
          </div>
        </div>

      </div>
    );
  }
}

export default App;
