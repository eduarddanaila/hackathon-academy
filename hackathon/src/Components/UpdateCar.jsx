
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


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
        <form onSubmit={handleUpdate}>
          <label htmlFor="manufacturer">
            Manufacturer:
            <input type="text" value={manufacturer}  onChange={e => setManufacturer(e.target.value)} />
          </label>
          <br />
          <label htmlFor="model">
            Model:
            <input type="text" value={model}  onChange={e => setModel(e.target.value)} />
          </label>
          <br />
          <label htmlFor="engine">
            Engine:
            <input type="text" value={engine}  onChange={e => setEngine(e.target.value)} required />
          </label>
          <br />
          <label htmlFor="power">
            Power:
            <input type="text" value={power}  onChange={e => setPower(e.target.value)} required />
          </label>
          <br />
          <button Variant="Primary" type="submit">UPDATE</button>
        </form>
      </div>
    );
}

export default UpdateCar