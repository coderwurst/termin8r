import axios from 'axios';
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    console.log('entering useEffect');
    axios.get('http://localhost:8080/').then(resp => {
      console.log(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/coderwurst/termin8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termin8r
        </a>
      </header>
    </div>
  );
}

export default App;
