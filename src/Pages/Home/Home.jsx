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
                        opacity:0.9
                       

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



            <Brands></Brands>

        </div>
    );
};

export default Home;