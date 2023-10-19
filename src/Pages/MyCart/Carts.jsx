import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

// MdDelete
const Carts = ({ cart }) => {

    const { _id, photo, name, type, brand, price, rating } = cart;

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


                fetch(`https://coffee-shop-server-eo88ulseb-ahtesham-sajids-projects.vercel.app/user/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
        
                        }
        
                    })
            }
        })


       
    }


    return (
        <div className=''>
            <div className=" bg-gray-100 mb-5 rounded-sm px-5 py-3 flex gap-12">
                <img className="w-[250px] rounded-sm h-[200px]" src={photo} alt="" />
                <div className="w-1/2 flex ">
                    <div>
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <h4 className="text-xl font-medium mt-3 mb-3">Brand : <span className="font-normal">{brand}</span></h4>
                    </div>
                    <div className="ml-[90px]">
                        <p className="text-lg mb-4">$ {price}</p>
                        <p onClick={() => handleDelete(_id)} className="text-xl cursor-pointer"><MdDelete></MdDelete></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carts;