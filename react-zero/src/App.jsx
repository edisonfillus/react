import { hot, setConfig } from 'react-hot-loader'
import React, { Component} from "react";
import "./App.css";

setConfig({
  showReactDomPatchNotification: false
})

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
      </div>
    ); 
  }
}

export default hot(module)(App);