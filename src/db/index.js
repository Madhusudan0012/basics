import mongoose from 'mongoose' 
import { DB_Name } from '../contants.js'

const ConnectDB = (async()=>{
    try{
       const InstanceConnect = await  mongoose.connect(`${process.env.DB_URI}/${DB_Name}`);
       console.log(`Mongo Db Connected ${InstanceConnect.connection.host}`);



    }catch(error){
        console.log("Error" , error);
        process.exit(1);

    }
})

export default ConnectDB;