import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";


const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const {id} = useParams();
    console.log(id);

    const [detail, setDetail] = useState({});

    useEffect(()=>{
        const findCarDetail = details.find(car => car._id == id);
        setDetail(findCarDetail);
    },[details, id])

    console.log(detail);
    // FaCartPlus
    return (
        <div className='max-w-6xl mx-auto mb-16 mt-[80px]'>
            <img className='rounded-lg' src={detail.photo} alt="" />
            <div className='w-[200px] absolute ml-8 cursor-pointer -mt-[70px]'>
                <p className='bg-red-600 text-white px-4 py-2 flex gap-2 items-center justify-center rounded-md text-xl font-semibold'><FaCartPlus></FaCartPlus>Add To Card</p>
            </div>
            <h1 className='text-4xl font-bold mt-4'>{detail.name}</h1>
            <p className='text-xl font-semibold mt-3 mb-5'>$ {detail.price}</p>
            <p>{detail.description}</p>
        </div>
    );
};

export default Details;