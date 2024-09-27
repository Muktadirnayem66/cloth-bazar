import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <img src={assets.logo} className='w-26 h-20' alt="logo" /> 
           <ul className=' hidden sm:flex gap-5 text-gray-700 text-sm'>
            <NavLink to={"/"} className="flex flex-col gap-1 items-center">
                <p>HOME</p>
                <hr className=' w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/collection"} className="flex flex-col gap-1 items-center">
                <p>COLLECTION</p>
                <hr className=' w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/about"} className="flex flex-col gap-1 items-center">
                <p>ABOUT</p>
                <hr className=' w-2/4 h-[1.5px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/contact"} className="flex flex-col gap-1 items-center">
                <p>CONTACT</p>
                <hr  className=' w-2/4 h-[1.5px] border-none bg-gray-700 hidden'/>
            </NavLink>
           </ul>
           <div className=' flex items-center gap-5'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="search_icon" />
            <div className='group relative'>
                <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer' />
                <div className= 'group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-4 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className=' cursor-pointer hover:text-black'>My Profile</p>
                        <p className=' cursor-pointer hover:text-black'>Orders</p>
                        <p className=' cursor-pointer hover:text-black'>Logout</p>
                    </div>


                </div>

            </div>
            <Link to={"/cart"} className=' relative'>
                <img src={assets.cart_icon} alt="cart_icon" className='w-5 min-w-5' />
                <p className='bg-black absolute w-4 right-[-5px] bottom-[-5px] text-white rounded-full 
                text-[8px] text-center leading-4 aspect-square'>10</p>
            </Link>

           </div>
        </div>
    );
};

export default Navbar;