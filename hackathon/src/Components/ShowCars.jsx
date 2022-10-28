import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
return (
        <>
        <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>Car Details</Card.Title>
          <Card.Text>
            {cars.map(({ _id, manufacturer, model, engine, power }) => (
                <div key={_id}>
                    <p>{manufacturer}</p>
                    <p>{model}</p>
                    <p>{engine}</p>
                    <p>{power}</p>
                    <Button onClick={() => handleDelete(_id)}>Delete Car</Button>
                    <Button onClick={() => {
                    navigate('/update-car/' + _id);
                }}>Modify Car</Button>
                </div>
            ))}
            </Card.Text>
        </Card.Body>
      </Card>
        </>
    );
}

export default ShowCars;