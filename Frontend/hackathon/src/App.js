import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateCar from './Components/CreateCar.js'
import ShowCarDetails from './Components/ShowCarDetails.js'
import ShowCarList from './Components/ShowCarList.js'
import UpdateCarInfo from './Components/UpdateCarInfo.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
