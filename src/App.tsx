import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <h1>Guia da Chapada Diamantina</h1>
           <h2></h2>
        </p>
        <h4>Edinei Brito Andrade</h4>
        <a
          className="App-link"
          href="http://informebarra.com.br/v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Informe Barra Site de Notícias</h4>
          
        </a>
      </header>
    </div>
  );
}

export default App;
