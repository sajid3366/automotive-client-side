import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const MyCart = () => {

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);


    console.log(carts);


    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`https://automotive-server-ev0wqh55k-ahtesham-sajids-projects.vercel.app/carcart/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Item has been deleted.',
                                    'success'
                                )
                                const remaining = carts.filter(cart => cart._id !== id);
                                setCarts(remaining);

                            }

                        })
                }
            })



    }


    return (
        <div className="max-w-6xl mx-auto mt-12 mb-20">
            {
                carts.length > 0 ? <div className="flex gap-5">
                    <div className="w-3/4">
                        {
                            carts.map(cart => <div key={cart._id} className=" bg-gray-100 mb-5 rounded-sm px-5 py-3 flex gap-12">
                                <img className="w-[250px] rounded-sm h-[200px]" src={cart.photo} alt="" />
                                <div className="w-1/2 flex ">
                                    <div>
                                        <h2 className="text-3xl font-semibold">{cart.name}</h2>
                                        <h4 className="text-xl font-medium mt-3 mb-3">Brand : <span className="font-normal">{cart.brand}</span></h4>
                                    </div>
                                    <div className="ml-[90px]">
                                        <p className="text-lg mb-4">$ {cart.price}</p>
                                        <p onClick={() => handleDelete(cart._id)} className="text-xl cursor-pointer"><MdDelete></MdDelete></p>
                                    </div>

                                </div>
                            </div>

                            )

                        }
                    </div>
                    <div className="w-1/4 bg-gray-100 mb-5 rounded-sm px-5 py-5 ">
                        <h2 className="text-xl font-semibold text-center ">Total Item : {carts.length}</h2>
                    </div>

                </div> : <div>
                    <h2 className='text-center text-2xl font-semibold mb-12'>No car is available at this moment</h2>
                </div>
            }
        </div>
    );
};

export default MyCart;