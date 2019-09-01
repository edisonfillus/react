import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import 'purecss';
import './css/side-menu.css';
import AutorBox from './Autor';
import Home from './Home';
//import './js/ui.js';

ReactDOM.render(
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/autor" exact component={AutorBox} />
      </Switch>
    </Main>
  </BrowserRouter>,
  document.getElementById('root')
);
