import React, { Component } from 'react';
import './App.css';
import WordSearch from '../WordSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Techtonica Word Lookup</h1>
        </header>
        <WordSearch />
      </div>
    );
  }
}

export default App;
