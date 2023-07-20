
import express from "express";
import { createTag, deleteTag, getAllTag, updateTag } from "../controllers/tagController.js";

const Router = express.Router()


Router.get("/tag", getAllTag);
Router.post("/tag", createTag);
Router.delete("/tag/:id", deleteTag);
// Router.patch("/category-status/:id", updateCategoryStatus);
Router.put("/tag/:id", updateTag);
// Router.patch("/category/:id",  updatePostCategory);


export default Router;