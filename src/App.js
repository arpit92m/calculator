import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';
import Result from './components/Result';
import Operators from './components/Operators';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div>
        <Result/>
        <Numbers/>
        <Operators/>
        </div>
      </div>
    );
  }
}

export default App;
