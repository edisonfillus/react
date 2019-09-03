import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './componentes/Login';
import Logout from './componentes/Logout';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/timeline/:login" component={App}/>
        <PrivateRoute exact path="/timeline" component={App} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('auth-token') != null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location }}
        }
          />
        )
      }
    />
  );
}