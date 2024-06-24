//import bcrypt from 'bcrypt';


/*saltrounds --> With "salt round" they actually mean the cost factor. 
The cost factor controls how much time is needed to calculate a single BCrypt hash. 
The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time. 
The more time is necessary, the more difficult is brute-forcing.
The salt is a random value, and should differ for each calculation, so the result should hardly ever be the same, even for equal passwords.
(stackoverflow)*/

//hashing the pswd
// const hashing1 = async(pswd)=>{
//     try{
//         const saltRounds = 10;
//         const hashed_pswd = await bcrypt.hash(pswd, saltRounds);
//         return hashed_pswd;
//     }
//     catch(err){
//         console.log(`Error occured in hashing pswd ${err}`);
//     }
// }


// //decrypting 
// const comparePswd = async (pswd,hashed_pswd) =>{
//     return  bcrypt.compare(pswd,hashed_pswd);
// }



// export default {hashing1,comparePswd};