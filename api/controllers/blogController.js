import { createSlug } from "../helper/createSlug.js"
import Blog from "../models/Blog.js"


//Gett all Blog Post
export const getAllBlogPost = async (req, res, next) => {

    try {
        const data = await Blog.find()

        res.status(200).json({
            blog : data,
            message : "Get All Blog Post successful"
        })
        
    } catch (error) { 
        next(error)
    }
}

//Create Blog Post
export const createBlogPost = async (req, res, next) => {

    try {
        
        const { title, content, photo } = req.body;

        const data = await Blog.create({title, slug : createSlug(title), content, photo: photo ? photo : null })

        res.status(200).json({
            blog : data,
            message : "Post created successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Single Product
export const getSinglePost = async (req, res, next) => {

    try {
        const {id} = req.params;

        const data = await Blog.findById(id)

        res.status(200).json({
            blog : data,
            message : "Get Single Post successful"
        })
    } catch (error) { 
        next(error)
    }
}


//Delete Post
export const deletePost = async (req, res, next) => {

    try {
        const {id} = req.params;

        const data = await Blog.findByIdAndDelete(id)
        
        res.status(200).json({
            blog : data,
            message : "Post deleted successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Update Post
export const updatePost = async (req, res, next) => {

    try {

        const {id} = req.params;
        const {title, content, photo } = req.body;
        
        const data = await Blog.findByIdAndUpdate(id , {
            title, 
            slug : createSlug(title),
            content,
            photo
        }, {new : true});

        res.status(200).json({
            blog : data,
            message : "Post updated successful"
        })
    } catch (error) { 
        next(error)
    }
}

//Blog Post status update
export const updatePostStatus = async (req, res, next) => {
    
    try {
        const {id} = req.params;
        const {status} = req.body;
        const data = await Blog.findByIdAndUpdate(id, {status}, { new : true })

        res.status(200).json({
            blog : data,
            message : "Blog Post status updated successful"
        })
    } catch (error) {
        console.log(`${error.message}`.bgRed);
    }
}