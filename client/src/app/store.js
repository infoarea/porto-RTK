import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/Blog/BlogSlice";
import categoryReducer from "../features/Category/CategorySlice";
import singleBlogReducer from "../features/Blog/SingleBlogSlice"

//Create store 
const store = configureStore({
    reducer : {
        blog: blogReducer,
        singleBlog: singleBlogReducer,
        category: categoryReducer,
    },
    devTools: true
});

export default store;