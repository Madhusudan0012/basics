// import dotenv from "dotenv"

import express from 'express'
import 'dotenv/config.js'
import cors from 'cors' 

// dotenv.config();  
const app = express()

import ConnectDB from './db/index.js';


// dotenv.config({
//     path : './env'
// })
ConnectDB()
//alway async return Promises 
.then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`Server is runing on ${process.env.PORT}`);
   })
    
}

).catch((err)=>{
   console.log("Mongo Db Connection failed " , err);
}

)





// (async()=>{
//     try{
//     await mongoose.connect(`${process.env.DB_URI}/${DB_Name}`)
//     app.on("error" , ()=>{
//         console.log("my application is not able to talk!" , error )
//         throw error
//     })
//     app.listen(process.env.PORT , ()=>{
//             console.log(`DB is listening on PORT ${process.env.PORT}`)
//     })
//     }catch(error){
//         console.error("ERROR" , error)
//         throw err 
        
//     }

// })()