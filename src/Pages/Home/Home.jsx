import Review from "./Review";
import Brands from "./Brands";
import Faq from "./FAQ";


const Home = () => {




    return (
        <div className=" mt-12">
            <div className="mb-28">

                <div className="flex gap-[200px] items-center text-white absolute ml-[200px] mt-[150px]">
                    <div>
                    <h1 className="text-3xl font-bold mb-14">CAR<span className="text-red-600">HANT</span></h1>
                    <p className="text-7xl font-semibold"><span className="text-8xl">Find Your</span><br /> Next <span className="text-red-600">CAR </span></p>
                    <p className="border-2 px-4 py-2 w-[100px] text-xl text-center rounded-sm mt-5 cursor-pointer border-red-500 text-red-600">More..</p>
                    </div>
                    <div className="form-control">
                        
                        <label className="input-group">
                            <input type="text" placeholder="Car" className="input text-black text-xl input-bordered" />
                            <span className="text-red-600 text-xl">Search</span>
                        </label>
                    </div>
                </div>
                <img className="w-[100%] mx-auto h-[600px]" src="https://i.ibb.co/VNTmmP1/car-is-driving-road-night-forest.jpg" alt="" />

            </div>



            <Brands></Brands>
            <Review></Review>
            <Faq></Faq>

        </div>
    );
};

export default Home;