import { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
import PropTypes from 'prop-types'
import { toast } from "react-toastify";
const Login = ({setToken}) => {

    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async(e)=>{
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + "/api/user/admin", {email, password})
            console.log(response);
            
                if(response.data.success){
                    setToken(response.data.token)
                }else{
                    toast.error(response.data.message)
                }
                
            
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }

    }
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className=" text-2xl font-bold mb-4">Admin Panel</h1>
                <form onSubmit={submitHandler} action="">
                    <div className="mb-3 min-w-72">
                        <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input onChange={(e)=>setEmail(e.target.value)}  value={email} className=" rounded-md border w-full px-3 py-2 border-gray-300 outline-none" type="email" placeholder="your@email.com"  required/>
                    </div>
                    <div className="mb-3 min-w-72">
                        <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className=" rounded-md border w-full px-3 py-2 border-gray-300 outline-none" type="password" placeholder="password"  required/>
                    </div>
                    <button className="mt-2 w-full py-2 px-4 bg-blue-400 text-white rounded-md hover:bg-blue-500" type="submit">Login</button>
                </form>
            </div>
            
        </div>
    );
};

Login.propTypes = {
    setToken:PropTypes.func.isRequired
}

export default Login;