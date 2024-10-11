import { assets } from "../assets/assets";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-2 px-[4%]">
          <div>
          <img className="w-[max(8%,80px)]" src={assets.logo} alt="admin_logo" /> 
             <p className=" uppercase font-bold text-gray-500">Admin Panel</p>
            </div> 
          <button className="bg-blue-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm" >Logout</button>
        </div>
    );
};

export default Navbar;