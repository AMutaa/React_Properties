import React, { Component } from 'react';
import Home from './Home';
import './App.scss';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={() => alert('I am globally styled')}>
          I am button 1 - Press Me
          </button>
        <Button />
        <Home />
      </div>
    );
  }
}

export default App;
