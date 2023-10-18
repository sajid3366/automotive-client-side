import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto my-8'>
            <Navbar></Navbar>
            
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;