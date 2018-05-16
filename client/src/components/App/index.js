import React, { Component } from 'react';
import './App.css';
import TextForm from '../TextForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Techtonica Word Lookup</h1>
        </header>
          <TextForm />
      </div>
    );
  }
}

export default App;
