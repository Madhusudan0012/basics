// import dotenv from "dotenv"

import express from 'express'
import 'dotenv/config.js'

import ConnectDB from './db/index.js';

const app = express() 

// dotenv.config({
//     path : './env'
// })


ConnectDB()





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