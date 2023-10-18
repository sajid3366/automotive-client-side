import { FaCar } from "react-icons/fa";

const Brands = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-xl flex items-center justify-center gap-2 text-red-600  font-semibold"><FaCar></FaCar>POPULAR BRANDS</h2>
                <h2 className="text-[40px]  font-bold">Explore The <span className="text-red-600">Luxury</span></h2>
            </div>
            <div className="grid grid-cols-3 gap-6 ">
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/qkpqN6w/tesla-logo-2007-full-download.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Tesla</h1>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/tChzGjJ/ferrari-logo.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Ferrari</h1>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/qsGXJJh/bmw-logo-2020-gray-download.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">BMW</h1>
                </div>
                {/* <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/rxR5wHJ/audi-logo-2016-download.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Audi</h1>
                </div> */}
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/5jqShKJ/Rolls-Royce-logo-2048x2048.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Rolls Royc</h1>
                </div>
                {/* <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/B6syb3m/Mercedes-Benz-logo-2011-1920x1080.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Mercedes</h1>
                </div> */}
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/48VLpx3/ford-logo-2017-download.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Ford</h1>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
                    <img className="w-full h-[350px]" src="https://i.ibb.co/yXdjYYM/toyota-logo-2020-europe-download.webp" alt="" />
                    <hr className="h-2 " />
                    <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Toyota</h1>
                </div>

            </div>
        </div>
    );
};

export default Brands;