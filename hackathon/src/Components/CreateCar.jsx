/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function CreateCar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [power, setPower] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:4193/Cars/createCar", {
      manufacturer, model, engine, power,
    });

    console.log('CREATED:', res);
  }

  return (
    <div>
      <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>New Car Input</Card.Title>
          <Card.Text>
            <ListGroup>  
        <form onSubmit={handleSubmit}>
          <ListGroup.Item>
        <label htmlFor="manufacturer">
          Manufacturer:
          <input type="text" value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
        </label>
        </ListGroup.Item>
        <ListGroup.Item>
        <label htmlFor="model">
          Model:
          <input type="text" value={model} onChange={e => setModel(e.target.value)} />
        </label>
        </ListGroup.Item>
        <ListGroup.Item>
        <label htmlFor="engine">
          Engine:
          <input type="text" value={engine} onChange={e => setEngine(e.target.value)} required />
        </label>
        </ListGroup.Item>
        <ListGroup.Item>
        <label htmlFor="power">
          Power:
          <input type="text" value={power} onChange={e => setPower(e.target.value)} required />
        </label>
        </ListGroup.Item>
        <Button variant="success" type="submit">CREATE</Button>
      </form>
      </ListGroup>
      </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCar;