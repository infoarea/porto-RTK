import { createSlice } from "@reduxjs/toolkit";
import { createPost, deleteBlogPost, fetchAllPost, updateBlogPost, updateBlogPostStatus } from "./BlogApi";

//initial state
const initialState = {
    blogs: [],
    loading: false,
    error: null
}

//Create slice
export const blogSlice = createSlice({

    name: "blog",
    initialState,

    reducers : {},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllPost.fulfilled, (state, {type, payload})=>{
           state.blogs = payload
        }).addCase(createPost.fulfilled, (state, {type, payload})=>{
            state.blogs.push(payload)
         }).addCase(updateBlogPost.fulfilled, (state, {type, payload})=>{

            state.blogs[state.blogs.findIndex(data => data._id === payload.id)] = payload.updatData

         }).addCase(deleteBlogPost.fulfilled, (state, {type, payload})=>{
            state.blogs = state.blogs.filter(data=> data._id !== payload)
         }).addCase(updateBlogPostStatus.fulfilled, (state, {type, payload})=>{
            state.blogs[state.blogs.findIndex(data=> data._id === payload._id)] = payload
         })
    }

});



//Export action
const {} = blogSlice.actions;
//Export reducer
export default blogSlice.reducer;