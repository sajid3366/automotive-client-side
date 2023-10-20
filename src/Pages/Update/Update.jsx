import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const car = useLoaderData()
    console.log(car);
    const { _id, name, brand, type, rating, price, description, photo } = car;
    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const brand = form.brand.value;

        const updateProduct = { name, brand, type, rating, price, photo };
        console.log(updateProduct);

        fetch(`https://automotive-server-7gmgu6zye-ahtesham-sajids-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] p-12 mt-12 mb-12 rounded-lg'>
            <h1 className='text-4xl font-semibold mb-8 text-center'>Update Information</h1>

            <form className="max-w-6xl mx-auto" onSubmit={handleUpdateProduct}>
                
                <div className="flex gap-4 mb-8">
                    <div className='w-1/2'>
                        <p>Photo URL</p>
                        <input className='border-2 px-4 rounded-md mt-2 border-solid w-full h-[50px]' placeholder='Photo URL' type="text" defaultValue={photo} name="photo" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Car Name</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Car name' type="text" defaultValue={name} name="name" id="" />

                    </div>
                    
                </div>
                <div className='flex gap-4 mb-8'>
                <div className='md:w-1/2'>
                        <p>Car Brand</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Car Brand' type="text" defaultValue={brand} name="brand" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Type</p>
                        <input className='border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]' placeholder='Type' type="text" defaultValue={type} name="type" id="" />

                    </div>
                    

                </div>
                <div className='flex gap-4 mb-8'>
                <div className='md:w-1/2'>
                        <p>Price</p>
                        <input className='border-2 rounded-md mt-2 px-4 border-solid w-full h-[50px]' placeholder='Price' type="text" defaultValue={price} name="price" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Rating</p>
                        <input className='border-2 rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Rating' type="text" defaultValue={rating} name="rating" id="" />

                    </div>

                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Update Product" />
            </form>

        </div>
    );
};

export default Update;