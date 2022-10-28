
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CreateCar from './CreateCar.jsx';

function UpdateCar({ currentCar }) {
    const navigate = useNavigate();

    const handleUpdate = (e, newData) => {
        e.preventDefault();
        axios.patch('http://localhost:4193/Cars/modifyCar/'+currentCar._id, newData)
        .then(() => navigate("/Cars/ShowCars")
        .catch((err) => console.log(err.message)))
    };
    return<CreateCar handleSubmit={handleUpdate} currentCar={currentCar}/>;
}

export default UpdateCar