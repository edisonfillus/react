import React, { Component } from 'react';
import FotoItem from './Foto';
import { throws } from 'assert';

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { fotos: [] };
    this.login = this.props.login;
  }

  componentDidMount() {
    this.carregaFotos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  carregaFotos(){ 
    let urlPerfil;
    let config = {};
    if (this.login === undefined) {
      // Private timeline
      urlPerfil = "http://localhost:8000/api/fotos";
      config = { headers: { "x-access-token": localStorage.getItem("auth-token") } }
    } else {
      // Public timeline
      urlPerfil = `http://localhost:8000/api/fotos/${this.login}`;

    }

    fetch(urlPerfil, config)
      .then(response => response.json())
      .then(fotos => {
        this.setState({ fotos: fotos });
      });
  }

  render() {
    return (
      <div className="fotos container">
        {
          this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
        }
      </div>
    );
  }
}