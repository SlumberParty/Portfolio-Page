import React from 'react';
import './App.css';
import TextColor from './components/TextColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextColor />
      </header>
      <body className="App-body">
        <h3>
          Fullstack Software Developer
        </h3>
        <div className="fuck">
        <p>Projects <a
          className="App-link"
          href="https://twitter.com/AlchemyPDXBot"
          target="_blank"
          rel="noopener noreferrer">
          here, 
        </a> <a
          className="App-link"
          href="https://twitter.com/AlchemyPDXBot"
          target="_blank"
          rel="noopener noreferrer">
          here, 
        </a> and <a
          className="App-link"
          href="https://twitter.com/AlchemyPDXBot"
          target="_blank"
          rel="noopener noreferrer">
          here, 
        </a>
        </p>
          
        </div>
      </body>
    </div>
  );
}

export default App;
