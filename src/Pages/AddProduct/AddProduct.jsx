import Swal from "sweetalert2";

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newProduct = { name, type, rating, price, description, photo };
        console.log(newProduct);

        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] p-12 mt-12 rounded-lg'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Add A New Car</h1>

            <form onSubmit={handleAddProduct}>
                <div className='flex gap-4 mb-8'>
                    <div className='md:w-1/2'>
                        <p>Photo URL</p>
                        <input className='border-2 px-4 rounded-md mt-2 border-solid w-full h-[50px]' placeholder='Photo URL' type="text" name="photo" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Car Name</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Car name' type="text" name="name" id="" />

                    </div>

                </div>
                <div className='flex gap-4 mb-8'>
                    
                    <div className='md:w-1/2'>
                        <p>Type</p>
                        <input className='border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]' placeholder='Type' type="text" name="type" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Price</p>
                        <input className='border-2 rounded-md mt-2 px-4 border-solid w-full h-[50px]' placeholder='Price' type="text" name="price" id="" />

                    </div>

                </div>
                <div className='flex gap-4 mb-8'>
                    
                    <div className='md:w-1/2'>
                        <p>Description</p>
                        <input className='border-2 rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Description' type="text" name="description" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Rating</p>
                        <input className='border-2 rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Rating' type="text" name="rating" id="" />

                    </div>

                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Add Product" />
            </form>

        </div>
    );
};

export default AddProduct;