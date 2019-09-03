import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './componentes/Login';
import Logout from './componentes/Logout';



function verificaAutenticacao(nextState,replace) {
  if(localStorage.getItem('auth-token') === null){
    replace('/');
  }
}

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/timeline" component={App} onEnter={verificaAutenticacao}/>
        <Route exact path="/logout" component={Logout} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
