import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch All Category
export const fetchAllCategory = createAsyncThunk("category/fetchAllCategory", async ()=>{

    const response = await axios.get("http://localhost:5050/api/v1/blog/category");
        
    return response.data.category

});

//Create Category 
export const createCategory = createAsyncThunk("category/createCategory", async ({name, photo})=>{

    await axios.post("http://localhost:5050/api/v1/blog/category", {name, photo});
        console.log(photo);
    return {name, photo};

});

//Update Category 
export const updateCategory = createAsyncThunk("category/updateCategory", async ({name, photo, id})=>{

    await axios.put(`http://localhost:5050/api/v1/blog/category/${id}`, {name, photo});
            let updateData = {name, photo}
    return {updateData, id}

});

//Delete Category 
export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id)=>{

    await axios.delete(`http://localhost:5050/api/v1/blog/category/${id}`);
            
    return id

});

//category status change
export const updateCategoryStatus = createAsyncThunk("category/updateCategoryStatus", async ({id, status})=>{

    const response = await axios.patch(`http://localhost:5050/api/v1/blog/category-status/${id}`, {status});
            
    return response.data.category

});
