import express, { Router } from 'express';
import {registerController , loginController , testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//router obj (mvc arch)
const router = express.Router();

//registering the user
router.post("/register", registerController) //due to mvc arch, defining the func in controller
router.post("/login", loginController);


// //test controller (middleware)
router.get("/test" , requireSignIn, isAdmin , testController);


export default router;