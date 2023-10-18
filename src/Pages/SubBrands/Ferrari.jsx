import { useLoaderData } from 'react-router-dom';

const Ferrari = () => {
    const cars = useLoaderData()
    console.log(cars);
    return (
        <div>
            thisis for farrari{cars.length}
        </div>
    );
};

export default Ferrari;