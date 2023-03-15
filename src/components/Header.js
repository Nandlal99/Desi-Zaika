import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";
import logo from "../img/Logo.png";
// const isLoggedIn = () => {
//     // API call to check login or logout
//     return true;
// };

const Header = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const cartItem = useSelector((store) => store.cart.items);

    return (
        <div className=" bg-white fixed h-20 flex justify-between shadow-md w-full top-0 left-0 right-0 ">
            <div className="mx-5">
                <Link to="/">
                    <img className="logo-main h-20 px-1  " alt="logo" src={logo} />
                </Link>
            </div>
            <div className="nav-item">
                <ul className="flex p-3 m-3 font-semibold text-gray-600">
                    <li className="px-5 ">{ useOnline() ? <h3 className="useOnline text-green-500">Online</h3> : 
                                    <h3 className="useOffline text-gray-300">Offline</h3>
                        }</li>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5 "><Link to="/">Home</Link></li></button>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5"><Link to="/about">About</Link></li></button>
                    {/* <li className="px-3"><Link to="/contact">Contact</Link></li> */}
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5"><Link to="/instamart">Instamart</Link></li></button>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5"><Link to="/cart">Cart - {cartItem.length}</Link></li></button>
                    {/* {
                        (isLoggedIn) ? <button className="px-5 hover:bg-gray-300 rounded-md" onClick={() => {setIsLoggedIn(false)}}>logout</button>
                         : <button className="px-5 hover:bg-gray-300 rounded-md" onClick={() => {setIsLoggedIn(true)}}>login</button>
                    } */}
                    <button className="px-5 hover:bg-gray-300 rounded-md"><li><Link to="/login" >Login</Link></li></button>
                    
                </ul>
            </div>
        </div>
    );
};


export default Header;