import { createSlice } from "@reduxjs/toolkit";
import { singleBlogPost } from "./BlogApi";

//initial state
const initialState = {
    singleBlogs: {}
}

//Create slice
export const singleBlogSlice = createSlice({

    name: "singleblog",
    initialState,
    reducers : {},
    extraReducers: (builder)=>{
        builder.addCase(singleBlogPost.fulfilled, (state, {type, payload})=>{
           state.singleBlogs = payload
        })
    }

});

//Export action
const {} = singleBlogSlice.actions;
//Export reducer
export default singleBlogSlice.reducer;