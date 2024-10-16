
import { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext.jsx';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSellerProducts, setBestSellerProducts] = useState([])

    useEffect(()=>{
        const bestProducts= products.filter((product)=>product.bestseller)
        setBestSellerProducts(bestProducts.slice(0,5))
    },[products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLET'}/>
                <p className=" w-3/4 m-auto  text-gray-600 text-xs sm:text-sm md:text-base">Shop our best-selling products and discover what everyone is raving about!</p>
                
                
            </div>
            {/* render best seller products */}
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSellerProducts.map((item)=>(
                        <ProductItem key={item._id} item={item}/>
                    ))
                }
            </div>
            
        </div>
    );
};

export default BestSeller;