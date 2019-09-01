import 'purecss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AutorBox from './Autor';
import LivroBox from './Livros';
import './css/side-menu.css';
import Home from './Home';
import './index.css';
import Main from './Main';
//import './js/ui.js';

ReactDOM.render(
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/autor" exact component={AutorBox} />
        <Route path="/livros" exact component={LivroBox} />
      </Switch>
    </Main>
  </BrowserRouter>,
  document.getElementById('root')
);
