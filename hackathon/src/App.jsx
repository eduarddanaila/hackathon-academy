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

import ShowCarList from './Components/ShowCarList';

import ShowCarDetails from './Components/ShowCarDetails';

import UpdateCarInfo from './Components/UpdateCarInfo';



class App extends Component {
  render() {

    return (

      <Router>
        <header>
          <h1>CARS</h1>
        </header>

        <Link to="/create-car" className="nav-link">
        Create New Car
        </Link>

        <Routes>
          

            <Route exact path='/' element={<ShowCarList />} />

            <Route path='/create-car' element={<CreateCar/>} />

            <Route path='/edit-car/:id' element={<UpdateCarInfo />} />

            <Route path='/show-car/:id' element={<ShowCarDetails />} />

        
        </Routes>

      </Router>

    )
  }
}
  
export default App;