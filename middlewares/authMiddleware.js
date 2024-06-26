import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// //token based protected routes
// //creating middlewares for the same

export const requireSignIn = async(req,res,next) =>{
    try {
        console.log(`inside middleware`);
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_KEY);
        req.user = decode; //w/o this we cant get the id
        next();
    } catch (error) {
        console.log(`Err in middleware ${error}`)
    }
}



//middleware for checking the admin access

export const isAdmin = async(req,res,next) =>{
    try {

    //finding the user with admin role
        const adminUser = userModel.findById(req.user._id);

        if(adminUser.role === 0){
            res.status(401).send({
                sucsess : false,
                msg : "Unauthorized Access, only admins are allowed!"
            })
        }else{
            next();
        }
        
    } catch (error) {
        console.log(`Error occured in Admin Acess in middleware ${error}`);
    }
}