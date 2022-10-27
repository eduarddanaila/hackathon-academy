import axios from 'axios';
import { useEffect, useState } from 'react';

function ShowCars() {
    const [cars, setCars] = useState([]);

    const getCars = async () => {
        const res = await axios.get('http://localhost:4193/Cars/getAllCars');
        setCars(res.data);
    };

    useEffect(() => { getCars(); });

    const handleDelete = (id) => {
        // axios.delete
        console.log("ID:", id);
    }
    return (
        <>
            {cars.map(({ _id, manufacturer, model, engine, power }) => (
                <div key={_id}>
                    <p>{manufacturer}</p>
                    <p>{model}</p>
                    <p>{engine}</p>
                    <p>{power}</p>
                    <button onClick={() => handleDelete(_id)}>DELETE</button>
                </div>
            ))}
        </>
    );
}

export default ShowCars;