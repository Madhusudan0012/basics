import mongoose , {Schema} from 'mongoose';
import mongooseAggregatePaginate  from "mongoose-aggregate-paginate-v2"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const VideoSchema = new Schema(
    {
        VideoFile:{
            type : String, //cloudnary url
            required :  true 
        }, 
        Thumbnail :{
            type : String,
            required : true
        }

    },
    {
        timestamps: true

    }
);

VideoSchema.plugin(mongooseAggregatePaginate);



export const Video = mongoose.model("Video" , VideoSchema);
