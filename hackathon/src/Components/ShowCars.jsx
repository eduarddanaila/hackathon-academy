import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

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
          <Card.Title>All Cars</Card.Title>
          <Card.Text>
          <ListGroup>
            {cars.map(({ _id, manufacturer, model, engine, power }) => (
                <div key={_id}>
                    <ListGroup.Item>
                   {manufacturer}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    {model}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    {engine}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    {power}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Button onClick={() => handleDelete(_id)}>Delete Car</Button>
                    <Button onClick={() => {
                    navigate('/update-car/' + _id);
                }}>Modify Car</Button>
                </ListGroup.Item>
                </div>
            ))}
            </ListGroup>
            </Card.Text>
        </Card.Body>
      </Card>
        </>
    );
}

export default ShowCars;