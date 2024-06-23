const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db'); 

//configure
dotenv.config();

//database config
connectDB();

//REST object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get("/", (req,res)=>{
    res.send("<h1>HIiiiii</h1>");
})




const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})