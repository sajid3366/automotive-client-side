import { Link } from "react-router-dom";

const HyundaiCars = ({car}) => {
    const { _id, photo, name, type, brand, price, rating } = car;

    return (
        <div>
            <div className="bg-gray-100 rounded-lg mb-8 px-5 py-3 lg:flex gap-12">
                <img className="w-[450px] rounded-lg h-[350px]" src={photo} alt="" />
                <div className="lg:w-1/2">
                    <h2 className="text-3xl mt-5 lg:mt-0 font-semibold">{name}</h2>
                    <h4 className="text-xl font-medium mt-3 mb-3">Brand : <span className="font-normal">{brand}</span></h4>
                    <p className="text-xl mb-3">{type}</p>
                    <p className="text-lg font-bold">$ {price}</p>
                    <p className="text-lg font-semibold ">Rating : {rating}</p>
                    <div className="mt-10 lg:mt-24 flex justify-between w-full">
                        <Link to={`/Hyundai/${_id}`}><p className="bg-red-600 text-xl font-semibold  text-white px-4 py-2 rounded-sm cursor-pointer">View Details</p></Link>
                        <Link to={`/update/${_id}`}>
                            <p className="border-red-600 border-2 text-xl font-semibold rounded-sm text-red-600 px-4 py-2  cursor-pointer">Update</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HyundaiCars;