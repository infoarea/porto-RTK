import { createSlice } from "@reduxjs/toolkit";
import { createCategory, deleteCategory, fetchAllCategory, updateCategory, updateCategoryStatus } from "./CategoryApi";

//initial state
const initialState = {
    categories: [],
    loading: false,
    error: null
}

//Create slice
export const categorySlice = createSlice({

    name: "category",
    initialState,

    reducers : {},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllCategory.fulfilled, (state, {type, payload})=>{
           state.categories = payload
        }).addCase(createCategory.fulfilled, (state, {type, payload})=>{
            state.categories.push(payload)
         }).addCase(updateCategory.fulfilled, (state, {type, payload})=>{

            state.categories[state.categories.findIndex(data => data._id === payload.id)] = payload.updateData

         }).addCase(deleteCategory.fulfilled, (state, {type, payload})=>{
            state.categories = state.categories.filter(data=> data._id !== payload)
         }).addCase(updateCategoryStatus.fulfilled, (state, {type, payload})=>{
            state.categories[state.categories.findIndex(data=> data._id === payload._id)] = payload
         })
    }

});



//Export action
const {} = categorySlice.actions;
//Export reducer
export default categorySlice.reducer;