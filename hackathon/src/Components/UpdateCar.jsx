/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


function UpdateCar({ currentCar }) {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState('');
    const [power, setPower] = useState('');

    const { id } = useParams();


    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4193/Cars/modifyCar/'+ id, {
            manufacturer, model, engine, power
        })
        .then(() => navigate("/show-cars"))
        .catch((err) => console.log(err.message))
    };
    return (
        <div>
          <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>Modify Car Details</Card.Title>
          <Card.Text>
            <ListGroup> 
        <form onSubmit={handleUpdate}>
          <ListGroup.Item>
          <label htmlFor="manufacturer">
            Manufacturer:
            <input type="text" value={manufacturer}  onChange={e => setManufacturer(e.target.value)} />
          </label>
          </ListGroup.Item>
          <ListGroup.Item>
          <label htmlFor="model">
            Model:
            <input type="text" value={model}  onChange={e => setModel(e.target.value)} />
          </label>
          </ListGroup.Item>
          <ListGroup.Item>
          <label htmlFor="engine">
            Engine:
            <input type="text" value={engine}  onChange={e => setEngine(e.target.value)} required />
          </label>
          </ListGroup.Item>
          <ListGroup.Item>
          <label htmlFor="power">
            Power:
            <input type="text" value={power}  onChange={e => setPower(e.target.value)} required />
          </label>
          </ListGroup.Item>
          <Button variant="info" type="submit">UPDATE</Button>{' '}
        </form>
        </ListGroup>
      </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
}

export default UpdateCar