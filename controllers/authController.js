import userModel from "../models/userModel.js";
//import hashing1 from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken';


//registring the users (POST)
export const registerController = async(req,res) =>{
    try {
        //destructuring
        const {name,email,password,phone,address,role} = req.body;

        //validations
        if(!name || !email || !password || !address || !phone){
            res.send({msg: "Kindly enter the required fields"});
        }

        //checking existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success : true,
                message : "User is already registered please login"
            })
        }

        //registering the user


        //const original_hashed_pswd = await hashing1(password); //password taken from user

        //saving the user 
        const user = await new userModel({name,email,password,phone,address,role}).save();

        res.status(201).send({
            success : true,
            message : "User is registered successfully",
            user
        })

        // res.json({user});
    } 
    catch (error) {
        console.log(`error occurred in authController`,error);
        res.status(500).send({
            success : false,
            message : "Error occurred while registering",
            error
        })
    }
}




//login credentials (POST)
export const loginController = async(req,res) => {

    try {

        //email and pswd needed for login credentials
        const {email,password} = req.body;

        //validations
        // if(!email || !password){
        //     res.status(404).send({
        //         success : false,
        //         msg : "Invalid email or password"
        //     });
        // }

        const user = await userModel.findOne({email});
        //user not found while logging
        if(!user){
            res.status(404),send({
                success : false,
                msg: "Register the user"
            })
        }
        //password matching later 
        
        //logging the user
        //token
        const token = await JWT.sign({_id: user.id}, process.env.JWT_KEY,{
            expiresIn : '7d'
        });
        //success
        res.status(200).send({
            success : true,
            msg : "Login successful",
            user : {
                _id: user.id,
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address 
            }
            ,token
        })
        
    } 
    
    catch (error) {
        console.log(`Error occurred while logging ${error}`);
        res.status(500).send({
            success : false,
            msg : "err in login",
            error,
        })
    }

}


export const testController = (req,res) =>{
    res.send({
        msg: "yo just testing the middlewares"
    })
}

//export default {registerController , loginController};