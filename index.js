import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js"; 
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';


//configure
dotenv.config();

//database config
connectDB();

//REST object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoutes);

//rest api
app.get("/", (req,res)=>{
    res.send("<h1>HIiiiii</h1>");
})




const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})