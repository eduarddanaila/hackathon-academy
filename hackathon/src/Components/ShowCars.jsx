import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function ShowCars() {
    const [cars, setCars] = useState([]);

    const navigate = useNavigate();

    const getCars = async () => {
        const res = await axios.get('http://localhost:4193/Cars/getAllCars');
        setCars(res.data);
    };

    useEffect(() => { getCars(); });

    const handleDelete = (id) => {
        axios.delete('http://localhost:4193/Cars/deleteCar/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err.message));
        console.log("ID:", id);
    }

    // const handleUpdate = (e, { id }) => {
    //     e.preventDefault();
    //     axios.put('http://localhost:4193/Cars/modifyCar/' + id,)
    //         .then((response) => {
    //             return response.data;
    //         })
    //         .catch((err) => console.log(err.message));
    //     console.log("ID:", id);
    // }
    return (
        <>
            {cars.map(({ _id, manufacturer, model, engine, power }) => (
                <div key={_id}>
                    <p>{manufacturer}</p>
                    <p>{model}</p>
                    <p>{engine}</p>
                    <p>{power}</p>
                    <button onClick={() => handleDelete(_id)}>Delete Car</button>
                    {/* <button onClick={() => handleUpdate(_id)}>UPDATE</button> */}
                <button onClick={() => {
                    navigate('/update-car/' + _id);
                }}>Modify Car</button>
                </div>
            ))}
        </>
    );
}

export default ShowCars;