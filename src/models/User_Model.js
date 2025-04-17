import mongoose , {Schema} from mongoose;
import dotenv from "dotenv" 


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

userSchema.pre("save" , async function(next){
    if(!this.isModified("passsword")) return next();
    this.password = bcrypt.hash(this.password) 
    next();
}) 

//for checking password 
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
}


userSchema.methods.genrateAccessToken = function(){
    jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email, 
            fullname : this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
                expiresIn : process.env.ACCESS_TOKEN_SECRET_EXPIRY,
                
        }
    )
}
userSchema.methods.genrateRefreshToken = function(){}

//both methods used for generating tokens







export const User = mongoose.model("User" , userSchema);