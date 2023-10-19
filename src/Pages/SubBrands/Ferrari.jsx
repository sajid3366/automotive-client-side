import { useLoaderData } from 'react-router-dom';
import FerrariCars from './FerrariCars';

const Ferrari = () => {
    const cars = useLoaderData()
    console.log(cars);
    return (
        <div>
            <div className="carousel w-full mb-20 mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img style={{
                        backgroundImage: `url('https://i.ibb.co/p3cf9MJ/matthew-brodeur-yc-FNrv-K9-Hp-Q-unsplash.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 1.5


                    }} className="h-[80vh] w-full  rounded-lg" alt="" />
                    <div className="absolute ml-[100px] mt-[100px] max-w-lg">
                        <h1 className="text-2xl font-bold text-red-700">WELLCOME TESLA HANT</h1>
                        <h2 className="text-[60px] font-bold text-white">Upto 30% Off On Your <span className="text-red-600">Dream</span> Car</h2>
                        <p className="text-xl mt-5 px-4 py-3 bg-red-600 text-white rounded-lg text-center w-[170px]">Learn More..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <img style={{
                        backgroundImage: `url('https://i.ibb.co/fk5jWDd/slider-1.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 1.5


                    }} className="h-[80vh] w-full  rounded-lg" alt="" />
                    <div className="absolute ml-[100px] mt-[100px] max-w-lg">
                        <h1 className="text-2xl font-bold text-red-700">WELLCOME TO TESLA HANT</h1>
                        <h2 className="text-[60px] font-bold text-white">Find Your New <span className="text-red-600">Luxury</span> Partner</h2>
                        <p className="text-xl mt-5 px-4 py-3 bg-red-600 cursor-pointer text-white rounded-lg text-center w-[170px]">Learn More..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img style={{
                        backgroundImage: `url('https://i.ibb.co/n0FBLbv/why-kei-8e2gal-GIE8-unsplash.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 1.5


                    }} className="h-[80vh] w-full  rounded-lg" alt="" />
                    
                    <div className="absolute ml-[100px] mt-[100px] max-w-lg">
                        <h1 className="text-2xl font-bold text-red-700">WELLCOME TO TESLA HANT</h1>
                        <h2 className="text-[60px] font-bold text-white">Drive, Satisfy and <span className="text-red-600">BUY</span> Car</h2>
                        <p className="text-xl px-4 py-3 bg-red-600 cursor-pointer text-white rounded-lg text-center w-[170px] mt-5">Learn More..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div className="max-w-6xl mx-auto">
                {
                    cars?.map(car => <FerrariCars key={car._id} car={car}></FerrariCars>)
                }
            </div>
        </div>
    );
};

export default Ferrari;