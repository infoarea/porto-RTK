import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Get All Blog Post
export const fetchAllPost = createAsyncThunk("blog/fetchAllPost", async ()=>{

    const response = await axios.get("http://localhost:5050/api/v1/blog/");
    
    return response.data.blog

})

//Create Post 
export const createPost = createAsyncThunk("blog/createPost", async({title, content, photo})=>{

     await axios.post("http://localhost:5050/api/v1/blog/", {title, content, photo});

    return {title, content, photo}
})

//Update Post 
export const updateBlogPost = createAsyncThunk("blog/updateBlogPost", async ({updatData , id})=>{

    await axios.put(`http://localhost:5050/api/v1/blog/${id}`, updatData);

    return { updatData , id}

});

//Delete Blog Post 
export const deleteBlogPost = createAsyncThunk("blog/deleteBlogPost", async (id)=>{

    await axios.delete(`http://localhost:5050/api/v1/blog/${id}`);
            
    return id

});

//Blog status change
export const updateBlogPostStatus = createAsyncThunk("blog/updateBlogPostStatus", async ({id, status})=>{

    const response = await axios.patch(`http://localhost:5050/api/v1/blog/post-status/${id}`, {status});
            
    return response.data.blog

});

//Single Post
export const singleBlogPost = createAsyncThunk("singleblog/singleBlogPost", async (id)=>{

    const response = await axios.get(`http://localhost:5050/api/v1/blog/${id}`);

    return response.data.blog

});
