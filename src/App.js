import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>d3 dashboard</h2>
        </header>
        <div>
          <Chart data={50} size={50} />
        </div>
        <div>other stuff</div>
      </div>
    );
  }
}

export default App;
