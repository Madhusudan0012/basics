// const asycHanerler = (fn) => async(req , res , next) => {
//     try{
//          await fn(req , res , next);
//     }catch(error){
//         res.status(err.code || 500).josn({
//             success : false,
//             message: err.message

//         })


//     }


// }

// export {asycHanerler}

// ------------------ Wapper Class in which we use Promises instead of async-----------

//use Promises 


const asyncHandler = (requestHandler) =>{
    (req , res , next) =>{
        Promise.resolve(requestHandler(req , res , next)).catch((error) => next(error ))
    }
        
}
