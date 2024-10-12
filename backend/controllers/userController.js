import { userModel } from "../models/userModel.js"
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id)=>{
   return jwt.sign({id},process.env.JWT_SECRET_KEY)
}

const loginUser = async (req, res)=>{

  try {
    const {email, password}  = req.body

    const user = await userModel.findOne({email})
    if(!user){
      return res.json({success:false, message:"user doesn't exists"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
      const token = createToken(user._id)
      return res.json({success:true, token})
    }else{
       res.json({ success:false, message: "Invalid credentials"})
    }
    
  } catch (err) {
    console.log(err);    
    return res.json({success:false, message:err.message})
  }

}

const registerUser = async (req, res)=>{
   try {

    const {name, email, password} = req.body

    //checking user already exists or not

    const existUser = await userModel.findOne({email})
    if(existUser){
      return res.json({success:false, message:"user already exists"})
    }

    //validating email and strong passrod
    if(!validator.isEmail(email)){
      return res.json({success:false, message:"Please provide a valid email"})
    }
    if(password.length < 8){
      return res.json({success:false, message:"Password must be a strong password"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)


    const newUser = new userModel({
      name,
      email,
      password:hashPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true, token})
    
   } catch (err) {
    console.log(err);
    res.json({success:false, message:err.message})
   }

}

const adminUser = async (req, res) =>{

  try {
    const {email, password} = req.body;
    
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY);
      res.json({success:true, token})
    }else{
        res.json({success:false, message:"Invalid credentials"})
    }
    
  } catch (err) {
    console.log(err);
    res.json({success:false, message:err.message})
  }


}

export { loginUser, registerUser, adminUser}
