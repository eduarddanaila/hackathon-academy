import axios from 'axios';
import { useState } from 'react';

function CreateCar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [power, setPower] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4193/Cars/", {
      manufacturer, model, engine, power,
    });

    console.log('CREATED:', res.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="manufacturer">
        Manufacturer:
        <input type="text" id="manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="model">
        Model:
        <input type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="engine">
        Engine:
        <input type="text" id="engine" value={engine} onChange={(e) => setEngine(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="power">
        Power:
        <input type="text" id="power" value={power} onChange={(e) => setPower(e.target.value)} required />
      </label>
      <br />
      <button type="submit">CREATE</button>
    </form>
  );
}

export default CreateCar;