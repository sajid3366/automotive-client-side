import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
    }

    return (
        <nav className=" lg:flex justify-between items-center px-4 h-[100%] ">
            <div className="w-2/3 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img className='w-[200px] cursor-pointer' src="../../../public/Image/logo_carhant.png" alt="" />
                    </Link>
                </div>
                <ul className="flex justify-center ml-12 items-center gap-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/addproduct" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mycart" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            My Cart
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="mt-5 ml-14 lg:mt-0 py-2">

                {
                    user ? <>

                        <div className="flex gap-2 items-center">
                            {/* <span className="text-xl font-semibold">{user.displayName}</span> */}
                            <p className="text-xl w-full flex  font-semibold">{user.displayName}</p>
                            <img className="w-[20%] h-[50px] rounded-full" src={user.photoURL} alt="" />
                            <div>
                                <button onClick={handleLogout} className="ml-2 bg-slate-300 rounded-lg text-black px-4 py-2">Logout</button>
                            </div>
                        </div>
                    </>
                        : <div className="w-1/3  items-center">
                            <NavLink to='/login'><button className="bg-slate-300 rounded-lg text-black px-4 py-2">Login</button></NavLink>
                        </div>
                }
            </div>


        </nav>
    );
};

export default Navbar;