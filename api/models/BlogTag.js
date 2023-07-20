import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
    
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    slug : {
        type : String,
        trim : true,
        required : true
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : true
    }

},
{
    timestamps: true
});

export default mongoose.models.Tag || mongoose.model("Tag", tagSchema);