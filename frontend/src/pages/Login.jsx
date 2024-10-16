import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";


const Login = () => {
    const [currentState, setCurrentState] = useState("Login")
    const {token, setToken, backendUrl, navigate} = useContext(ShopContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const submitHandler = async(event)=>{
        event.preventDefault()
        try {

            if(currentState === "Sign up"){
                const response = await axios.post(backendUrl + "/api/user/register", {name, email, password})
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem("token", response.data.token)
                }else{
                    toast.error(response.data.message)
                }
                
            }else{
                const response = await axios.post(backendUrl + "/api/user/login", {email, password})
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem("token", response.data.token)

                }else{
                    toast.error(response.data.message)
                }
                
                
            }
           
            
        } catch (err) {
            console.log(err);
            toast.error(err.message)
            
        }

    }

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    }, [token])
    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className=" inline-flex items-center gap-2 mb-2 mt-10">
                <p className=" text-3xl prata-regular">{currentState}</p>
                <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
           {currentState === "Login" ? "" : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-600 outline-none" required />}
            <input onChange={(e)=>setEmail(e.target.value)} name={email} type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-600 outline-none" required/>
            <input onChange={(e)=>setPassword(e.target.value)} name={password} type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-600 outline-none" required />
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