
import express from "express";
import { createBlogPost, getAllBlogPost, getSinglePost, deletePost, updatePost, updatePostStatus } from "../controllers/blogController.js";


const Router = express.Router()


Router.route("/").get(getAllBlogPost).post(createBlogPost)
Router.get("/:id", getSinglePost);
Router.delete("/:id", deletePost);
Router.put("/:id", updatePost);
Router.patch("/:id", updatePost);
Router.patch("/post-status/:id", updatePostStatus);


export default Router;