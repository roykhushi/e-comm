import mongoose from "mongoose";
const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connection is successful and connection host is ${connect.connection.host}`);
    }
    catch(err){
        console.log(`Error occurred in MongoDB ${err}`);
    }
}

export default connectDB;