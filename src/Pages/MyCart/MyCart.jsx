import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Carts from "./Carts";

const MyCart = () => {

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);


    console.log(carts);

    return (
        <div className="max-w-6xl mx-auto mb-20">
            <div className="flex gap-5">
                <div className="w-3/4">
                    {
                        carts ? carts.map(cart => <Carts key={cart._id} cart={cart}></Carts>)
                            : `
                    ${<p>There are no items in this cart</p>}
                `
                    }
                </div>
                <div className="w-1/4 bg-gray-100 mb-5 rounded-sm px-5 py-3">

                </div>
            </div>
        </div>
    );
};

export default MyCart;