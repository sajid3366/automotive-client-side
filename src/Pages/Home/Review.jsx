import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCar } from "react-icons/fa";


const Review = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mt-20 bg-gray-100  px-14 py-20 mb-20'>
            <h2 className='text-xl font-semibold text-red-500 flex justify-center mb-2 items-center gap-4 text-center'><FaCar></FaCar>TESTIMONIALS</h2>
            <h2 className="text-4xl font-bold  mt-4 text-center mb-12">What Our Clients <span className='text-red-600'>Says's</span></h2>
            

            <Carousel className='max-w-5xl mx-auto' responsive={responsive}>
                <div className='bg-white p-5 mr-4 rounded-lg'>
                    <img className='w-[30%]' src="https://i.ibb.co/h8cb3n6/member1.png" alt="" />
                    <h2 className="text-2xl mt-2 mb-2 font-semibold text-left">Alice Johnson</h2>
                    <h3 className='font-semibold mb-5 text-red-500'>Customer</h3>
                    <p className='max-w-xs px-6 mx-auto text-justify'>Innovative strategies, excellent leadership. Transformed our company's efficiency and productivity Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quas. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='bg-white p-5 mr-4 rounded-lg'>
                    <img className='w-[30%]' src="https://i.ibb.co/Nm0gfMd/member2.png" alt="" />
                    <h2 className="text-2xl mt-2 mb-2 font-semibold text-left">Alice Johnson</h2>
                    <h3 className='font-semibold mb-5 text-red-500'>Customer</h3>
                    <p className='max-w-xs px-6 mx-auto text-justify'>Innovative strategies, excellent leadership. Transformed our company's efficiency and productivity Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quas. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='bg-white p-5 mr-4 rounded-lg'>
                    <img className='w-[30%]' src="https://i.ibb.co/fM6RSYB/member3.png" alt="" />
                    <h2 className="text-2xl mt-2 mb-2 font-semibold text-left">Alice Johnson</h2>
                    <h3 className='font-semibold mb-5 text-red-500'>Customer</h3>
                    <p className='max-w-xs px-6 mx-auto text-justify'>Innovative strategies, excellent leadership. Transformed our company's efficiency and productivity Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quas. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='bg-white p-5 mr-4 rounded-lg'>
                    <img className='w-[30%]' src="https://i.ibb.co/svPy3YY/member4.png" alt="" />
                    <h2 className="text-2xl mt-2 mb-2 font-semibold text-left">Alice Johnson</h2>
                    <h3 className='font-semibold mb-5 text-red-500'>Customer</h3>
                    <p className='max-w-xs px-6 mx-auto text-justify'>Innovative strategies, excellent leadership. Transformed our company's efficiency and productivity Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quas. Lorem ipsum dolor sit amet.</p>
                </div>
                

            </Carousel>
        </div>
    );
};

export default Review;