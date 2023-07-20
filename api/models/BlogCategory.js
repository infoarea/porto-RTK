import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    slug : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    photo : {
        type : String,
        trim : true,
        default : null
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

export default mongoose.models.Category || mongoose.model("Category", categorySchema);