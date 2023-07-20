
import express from "express";
import { createCategory, deleteCategory, getAllCategory, updateCategory, updateCategoryStatus } from "../controllers/categoryController.js";

const Router = express.Router()


Router.get("/category", getAllCategory);
Router.post("/category", createCategory);
Router.delete("/category/:id", deleteCategory);
Router.patch("/category-status/:id", updateCategoryStatus);
Router.put("/category/:id", updateCategory);
Router.patch("/category/:id",  updateCategory);


export default Router;