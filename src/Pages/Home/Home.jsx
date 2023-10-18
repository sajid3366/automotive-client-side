import { Link } from "react-router-dom";
import Review from "./Review";
import { FaCar } from "react-icons/fa";
import Brands from "./Brands";


const Home = () => {


    

    return (
        <div className="mt-12">
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/fk5jWDd/slider-1.jpg" className="w-full h-[70vh] bg-black" />
                    <div className="absolute ml-[100px] mt-[100px] max-w-lg">
                        <h1 className="text-2xl font-bold text-red-700">WELLCOME TO CARHANT</h1>
                        <h2 className="text-[60px] font-bold text-white">Best Way To Find Your <span className="text-red-600">Dream</span>Car</h2>
                        <p className="text-xl px-4 py-3 bg-red-600 text-white rounded-lg text-center w-[170px]">Learn More..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* <img src="https://i.ibb.co/GPXD8hg/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" className="w-full h-[70vh]" /> */}
                    {/* <img style={{backgroundImage:`url("https://i.ibb.co/fk5jWDd/slider-1.jpg")`}} alt="" /> */}
                    <img style={{
                        backgroundImage: `url('https://i.ibb.co/fk5jWDd/slider-1.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        opacity: 0.9


                    }} className="h-[70vh] w-full  rounded-lg" alt="" />
                    <div className="absolute ml-[100px] mt-[100px] max-w-lg">
                        <h1 className="text-2xl font-bold text-red-700">WELLCOME TO CARHANT</h1>
                        <h2 className="text-[60px] font-bold  text-white">Flat discount on Cars</h2>
                        <p className="text-xl px-4 py-3 bg-red-600 cursor-pointer text-white rounded-lg text-center w-[170px]">Learn More..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GPXD8hg/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" className="w-full h-[70vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>


            {/* <div className="max-w-6xl mx-auto">
                <div className="text-center my-8">
                    <h2 className="text-xl flex items-center justify-center gap-2 text-red-600  font-semibold"><FaCar></FaCar>POPULAR BRANDS</h2>
                    <h2 className="text-[40px]  font-bold">Explore The <span className="text-red-600">Luxury</span></h2>
                </div>
                <div className="grid grid-cols-3 gap-6 ">
                    <Link to="/tesla">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/qkpqN6w/tesla-logo-2007-full-download.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Tesla</h1>
                        </div>
                    </Link>
                    <Link to="/ferrari">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/tChzGjJ/ferrari-logo.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Ferrari</h1>
                        </div>
                    </Link>

                    <Link to="/bmw">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/qsGXJJh/bmw-logo-2020-gray-download.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">BMW</h1>
                        </div>
                    </Link>

                    <Link to="/rollsroyce">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/5jqShKJ/Rolls-Royce-logo-2048x2048.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Rolls Royc</h1>
                        </div>
                    </Link>

                    <Link to="/ford">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/48VLpx3/ford-logo-2017-download.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Ford</h1>
                        </div>
                    </Link>
                    <Link to="/toyota">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                            <img className="w-full h-[350px]" src="https://i.ibb.co/yXdjYYM/toyota-logo-2020-europe-download.webp" alt="" />
                            <hr className="h-2 " />
                            <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Toyota</h1>
                        </div>
                    </Link>

                </div>
            </div> */}
            <Brands></Brands>
            <Review></Review>

        </div>
    );
};

export default Home;