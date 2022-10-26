/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="manufacturer">
          Manufacturer:
          <input type="text" onChange={e => setManufacturer(e.target.value)} />
        </label>
        <br />
        <label htmlFor="model">
          Model:
          <input type="text" onChange={e => setModel(e.target.value)} />
        </label>
        <br />
        <label htmlFor="engine">
          Engine:
          <input type="text" onChange={e => setEngine(e.target.value)} required />
        </label>
        <br />
        <label htmlFor="power">
          Power:
          <input type="text" onChange={e => setPower(e.target.value)} required />
        </label>
        <br />
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
}

export default CreateCar;