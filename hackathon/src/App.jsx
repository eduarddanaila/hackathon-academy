/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';

// import {
//   Col, Container, Nav, Row,
// } from 'react-bootstrap';

import CreateCar from './Components/CreateCar';
import ShowCars from './Components/ShowCars';
import UpdateCar from './Components/UpdateCar';
import Home from './Components/Home';



class App extends Component {
  render() {

    return (

      <Router>
        <header>
          <h1>Car Generator</h1>
        </header>
      
          <Link to='/Home' >
            Home
          </Link>
      
        <br />
      
          <Link to='/show-cars'>
            Show Cars
          </Link>
      
        <br />
        <Link to="/create-car">
          Create New Car
        </Link>


        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/show-cars' element={<ShowCars />} />
          <Route path='/create-car' element={<CreateCar />} />
          <Route path='/update-car' element={<UpdateCar />} />

        </Routes>

      </Router>

    )
  }
}

export default App;