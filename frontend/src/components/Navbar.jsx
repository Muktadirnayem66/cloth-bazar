import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

    const logout = ()=>{
        navigate("/login")
        localStorage.removeItem("token")
        setToken("")
        setCartItems({})

    }

    return (
        <div className='flex justify-between items-center'>
           <Link to="/"><img src={assets.logo} className='w-26 h-20' alt="logo" /> </Link>
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
            <img onClick={()=>setShowSearch(true)}  src={assets.search_icon} className='w-5 cursor-pointer' alt="search_icon" />
            <div className='group relative'>
              <Link to={"/login"}>  <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer' /></Link>
                <div className= 'group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-4 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className=' cursor-pointer hover:text-black'>My Profile</p>
                        <p className=' cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className=' cursor-pointer hover:text-black'>Logout</p>
                    </div>


                </div>

            </div>
            <Link to={"/cart"} className=' relative'>
                <img src={assets.cart_icon} alt="cart_icon" className='w-5 min-w-5' />
                <p className='bg-black absolute w-4 right-[-5px] bottom-[-5px] text-white rounded-full 
                text-[8px] text-center leading-4 aspect-square'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu_icon" />
           </div>
           {/* side bar menu for small scree */}

           <div className={`absolute right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${visible? "w-full": "w-0"}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="dropdown_icon" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/"}>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/collection"}>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/about"}>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to={"/contact"}>CONTACT</NavLink>
            </div>

           </div>
        </div>
    );
};

export default Navbar;