import { useState } from "react";


const Login = () => {
    const [currentState, setCurrentState] = useState("Sign up")

    const submitHandler = async(event)=>{
        event.preventDefault()

    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className=" inline-flex items-center gap-2 mb-2 mt-10">
                <p className=" text-3xl prata-regular">{currentState}</p>
                <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
           {currentState === "Login" ? "" : <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-600 outline-none" required />}
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-600 outline-none" required/>
            <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-600 outline-none" required />
            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className=" cursor-pointer">Forget Password</p>
                {
                    currentState === 'Login' ? 
                    <p onClick={()=> setCurrentState("Sign up")} className=" cursor-pointer">Create Account</p> :
                     <p onClick={()=> setCurrentState("Login")} className=" cursor-pointer">Login Here</p>
                }
            </div>
            <button className="bg-black text-white rounded-sm px-8 py-2 font-light mt-4">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
        </form> 
    );
};

export default Login;