import React from 'react';
import logo from './logo.svg';
import './App.css';

const RUNNING_FROM = process.env.REACT_APP_RUNNING_FROM;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am running from:
        </p>
        <p>
          <code>{RUNNING_FROM}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
