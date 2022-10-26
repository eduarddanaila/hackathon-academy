import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateCar from './Components/CreateCar.js'
import ShowCarDetails from './Components/ShowCarDetails.js'
import ShowCarList from './Components/ShowCarList.js'
import UpdateCarInfo from './Components/UpdateCarInfo.js'

class App extends Component {

  render() {

    return (

      <Router>

        <div>

          <Route exact path='/' component={ShowCarList} />

          <Route path='/create-car' component={CreateCar} />

          <Route path='/edit-car/:id' component={UpdateCarInfo} />

          <Route path='/show-car/:id' component={ShowCarDetails} />

        </div>

      </Router>

    );

  }

}

export default App;
