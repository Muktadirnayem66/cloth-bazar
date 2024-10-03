import { assets } from "../assets/frontend_assets/assets";


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img className="mb-5 w-32" src={assets.logo} alt="company_logo" />
                <p>At ClothBazar, we are committed to bringing you the best selection of [products category], offering quality, style, and value. With a focus on customer satisfaction, we strive to make your shopping experience easy and enjoyable from start to finish. For any questions or assistance, our support team is always ready to help. Stay connected with us on social media for updates, exclusive offers, and the latest collections. Happy shopping!</p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600 ">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li> 
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600 ">
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                Copyright 2024 © Md Muktadir Nayem - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;