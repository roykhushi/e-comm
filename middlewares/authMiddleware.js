import JWT from "jsonwebtoken";

//token based protected routes
//creating middlewares for the same

export const requireSignIn = async(req,res) =>{
    try {
        console.log(`inside middleware`);
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_KEY);
        next();
    } catch (error) {
        console.log(`Err in middleware ${error}`)
    }
}