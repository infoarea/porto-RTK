import { createSlug } from "../helper/createSlug.js"
import Category from "../models/BlogCategory.js"


//Gett all Blog Post
export const getAllCategory = async (req, res, next) => {

    try {
        const data = await Category.find()

        res.status(200).json({
            category : data,
            message : "Get All Category successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Create Blog Post
export const createCategory = async (req, res, next) => {

    try {
        
        const {name, photo} = req.body;
        const data = await Category.create({
            name, 
            slug : createSlug(name),
            photo: photo ? photo : null
        })

        res.status(200).json({
            category : data,
            message : "Create Category successful"
        })
    } catch (error) { 
        next(error)
    }
}



//Delete Post
export const deleteCategory = async (req, res, next) => {

    try {
        const {id} = req.params;

        const data = await Category.findByIdAndDelete(id)
        
        res.status(200).json({
            category : data,
            message : "Category deleted successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Update Post
export const updateCategory = async (req, res, next) => {

    try {

        const {id} = req.params;
        const {name, photo} = req.body;
        
        const data = await Category.findByIdAndUpdate(id , {
            name, 
            slug : createSlug(name),
            photo
        }, {new : true});

        res.status(200).json({
            category : data,
            message : "Category updated successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Catagory status update
export const updateCategoryStatus = async (req, res, next) => {
    
    try {
        const {id} = req.params;
        const {status} = req.body;
        const data = await Category.findByIdAndUpdate(id, {status}, { new : true })

        res.status(200).json({
            category : data,
            message : "Category status updated successful"
        })
    } catch (error) {
        console.log(`${error.message}`.bgRed);
    }
}