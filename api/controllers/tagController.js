import { createSlug } from "../helper/createSlug.js"
import Tag from "../models/BlogTag.js"


//Gett all Blog Post
export const getAllTag = async (req, res, next) => {

    try {
        const data = await Tag.find()

        res.status(200).json({
            tag : data,
            message : "Get All Tags successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Create Blog Tag
export const createTag = async (req, res, next) => {

    try {
        
        const {name} = req.body;
        const data = await Tag.create({
            name, 
            slug : createSlug(name)
        })

        res.status(200).json({
            tag : data,
            message : "Create Tag successful"
        })
    } catch (error) { 
        next(error)
    }
}



//Delete Tag
export const deleteTag = async (req, res, next) => {

    try {
        const {id} = req.params;

        const data = await Tag.findByIdAndDelete(id)
        
        res.status(200).json({
            tag : data,
            message : "Tag deleted successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Update Tag
export const updateTag = async (req, res, next) => {

    try {

        const {id} = req.params;
        const {name} = req.body;
        
        const data = await Tag.findByIdAndUpdate(id , {
            name, 
            slug : createSlug(name)
        }, {new : true});

        res.status(200).json({
            tag : data,
            message : "Tag updated successful"
        })
    } catch (error) { 
        next(error)
    }
}