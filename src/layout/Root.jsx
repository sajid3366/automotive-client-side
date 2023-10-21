import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1400px] mx-auto my-3'>
            <Navbar></Navbar>
            
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;