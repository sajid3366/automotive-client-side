import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import Swal from 'sweetalert2';


const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    console.log(details);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const findCarDetail = details.find(car => car._id == id);
        setDetail(findCarDetail);
    }, [details, id])

    console.log(detail);


    const handleAddToCart = (id) => {
        console.log(id);
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detail)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added to Cart',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className='max-w-6xl mx-auto mb-16 mt-[80px]'>
            <img className='rounded-lg' src={detail.photo} alt="" />
            <div className='w-[200px] absolute ml-8 cursor-pointer -mt-[70px]'>
                <p onClick={() => handleAddToCart(detail._id)} className='bg-red-600 text-white px-4 py-2 flex gap-2 items-center justify-center rounded-md text-xl font-semibold'><FaCartPlus></FaCartPlus>Add To Card</p>
            </div>
            <h1 className='text-4xl font-bold mt-4'>{detail.name}</h1>
            <p className='text-xl font-semibold mt-3 mb-5'>$ {detail.price}</p>
            <p>{detail.description}</p>
        </div>
    );
};

export default Details;