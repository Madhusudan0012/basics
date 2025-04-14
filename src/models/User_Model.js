import mongoose , {Schema} from mongoose;

const userSchema = new Schema(
    {
        username :{
            type: String , 
            unique : true , 
            required : true,
            lowercase : true,
            trim :  true , 
            index : true
        },
        email :{
            type: String , 
            unique : true , 
            required : true,
            lowercase : true,
            trim :  true , 
           
        },
        Fullname :{
            type: String , 
            unique : true , 
            required : true,
            trim : true 
        
        },
        avatar :{
            type: String , //cloudanary url 
            required : true     
        
        },
        coverImage : {
            type : String ,
        },
        watchHistory:{
            type: Schema.Types.ObjectId, 
            ref : "Video"
        },
        password :{
            type : String , 
            required: [true , 'Password is required']
        },
        refreshToken: {
            type : String , 
              
        },
    },
    {
        timestamps : true 
    }
)


export const User = mongoose.model("User" , userSchema);