const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection successful and connection host is ${connect.connection.host}`);
    }
    catch(err){
        console.log(`Error occurred in MOnGODB ${err}`);
    }
}

module.exports = connectDB;