import axios from 'axios';
import { useEffect, useState } from  'react';

function ShowCars() {
   const [ cars, setCars ] = useState([]);

   useEffect(() => {
    const getCars = async () => {
        const res = await axios.get('http://localhost:4193/Cars/getAllCars');
        setCars(res.data);
};
getCars();
});
   return (
    <>
    {cars.map(({ manufacturer, model, engine, power }) => (
        <>
       <p>{manufacturer}</p>
       <p>{model}</p>
       <p>{engine}</p>
       <p>{power}</p> 
       </>
   ))}
   </>
   );
}

export default ShowCars;