import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    slug : {
        type : String,
        trim : true,
        required : true
    },
    content:{
        type: String,
        trim: true,
        required: true
    },
    photo:{
        type: String,
    },
    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref : "Category",
        default : []
    },
    tag: {
        type: [mongoose.Schema.Types.ObjectId],
        ref : "Tag",
        default : []
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

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);