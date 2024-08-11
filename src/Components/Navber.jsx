import { NavLink } from 'react-router-dom';
import img from "./Navber/Image/logo.webp"

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/"
                                className="text-xl font-bold text-gray-500 hover:text-indigo-400"
                                style={({ isActive, }) => {
                                    return {
                                        color: isActive ? "red" : "",
                                        textDecoration: isActive ? "underline" : ""

                                    };
                                }}>Home</NavLink></li>
                            <li><NavLink
                                to="/tem"
                                className="text-xl font-bold text-gray-500 hover:text-indigo-400">Our Tem</NavLink></li>
                            <li><NavLink
                                to="/contact"
                                className=" text-xl font-bold text-gray-500 hover:text-indigo-400">Contect</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className='ml-4'><img src={img} alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li><NavLink to="/"
                            className="text-xl font-bold text-gray-500 hover:text-indigo-400"
                            style={({ isActive, }) => {
                                return {
                                    color: isActive ? "red" : "",
                                    textDecoration: isActive ? "underline" : ""

                                };
                            }}>Home</NavLink></li>
                        <li><NavLink
                            to="/tem"
                            className="ml-5 text-xl font-bold text-gray-500 hover:text-indigo-400">Our Tem</NavLink></li>
                        <li><NavLink
                            to="/contact"
                            className="ml-5 text-xl font-bold text-gray-500 hover:text-indigo-400">Contect</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input className='bg-indigo-400 h-12 rounded-md text-gray-800 font-bold text-lg px-3' placeholder='Text Here' type="text" />


                    <label className="grid cursor-pointer place-items-center ml-5">
                        <input
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navber;