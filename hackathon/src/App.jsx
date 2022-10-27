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
import DeleteCar from './Components/DeleteCar';
import UpdateCar from './Components/UpdateCar';
import Home from './Components/Home';



class App extends Component {
  render() {

    return (

      <Router>
        <header>
          <h1>Car Generator</h1>
        </header>

        <Link to='/Home' className='nav-link'>
          Home
        </Link>

        <Link to='/show-cars' className='nav-link'>
          Show Cars
        </Link>

        <Link to="/create-car" className="nav-link">
        Create New Car
        </Link>

        <Routes>
          

            <Route path='/home' element={<Home />} />
            <Route path='/show-cars' element={<ShowCars />}/>
            <Route path='/create-car' element={<CreateCar/>} />
            {/* <Route path='/update-car/:id' element={<UpdateCar />} />
            <Route path='/delete-car/:id' element={<DeleteCar />} /> */}

        
        </Routes>

      </Router>

    )
  }
}
  
export default App;