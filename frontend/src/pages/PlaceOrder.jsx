import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        //api cals
        case "cod":
          {
            const response = await axios.post(
              backendUrl + "/api/order/place",
              orderData,
              { headers: { token } }
            );

            if(response.data.success){
                setCartItems({})
                navigate("/orders")
            }else{
                toast.error(response.data.message)
            }
          }

          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={changeHandler}
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First name"
            className=" w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
          <input
            required
            onChange={changeHandler}
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            className=" w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
        </div>
        <input
          required
          onChange={changeHandler}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email address"
          className=" w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
        />
        <input
          required
          onChange={changeHandler}
          type="text"
          name="street"
          value={formData.street}
          placeholder="Street"
          className=" w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={changeHandler}
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            className="w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
          <input
            required
            onChange={changeHandler}
            type="text"
            name="state"
            value={formData.state}
            placeholder="State"
            className="w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={changeHandler}
            type="text"
            name="zipcode"
            value={formData.zipcode}
            placeholder="Zip code"
            className="w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
          <input
            required
            onChange={changeHandler}
            type="text"
            name="country"
            value={formData.country}
            placeholder="Country"
            className="w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
          />
        </div>
        <input
          required
          onChange={changeHandler}
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          className="w-full border outline-none border-gray-300 rounded py-1.5 px-3.5"
        />
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className=" mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* payment method selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black rounded-sm text-white text-sm my-8 px-8 py-3"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
