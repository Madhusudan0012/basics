import {asycHandler} from '../utils/asycHandler.js';

const registerUser  = asycHandler(async(req , res) =>{
    res.status(200).json({
        message : "ok"
    })
})


export {registerUser}