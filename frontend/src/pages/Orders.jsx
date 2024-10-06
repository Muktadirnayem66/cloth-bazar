import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className=" border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          products.slice(1,4).map((item)=>(
            <div key={item._id} className=" border-t border-b py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4  ">
              <div className="flex items-start gap-6 text-sm ">
                <img className="w-16" src={item.image[0]} alt="buying product_image" />
                <div>
                  <p className="font-medium sm:text-base">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: L</p>
                  </div>
                  <p className="mt-2">Date: <span className="text-gray-400">24, October, 2024</span></p>

                </div>

              </div>
              <div className=" md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className=" min-w-2 h-2 rounded-full bg-green-500"></p>
                <p>Ready To Ship</p>

              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>

              </div>
            </div>

          ))
        }
        
      </div>
    </div>
  );
};

export default Orders;
