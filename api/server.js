import express from "express";
import colors from "colors";
import cors from "cors";
import mongoDBConnect from "./config/db.js";
import dotenv from "dotenv"
import { errorHandler } from "./middlewares/errorHandler.js";
import blogPostRoute  from "./routes/blogRoute.js";
import categoryRoute  from "./routes/categoryRoute.js";
import tagRoute  from "./routes/tagRoute.js";

//environment variable
const PORT = process.env.PORT || 5050

//init express
const app = express()
dotenv.config()
app.use(cors())


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Set static
app.use(express.static("api/public"));

//Router
app.use("/api/v1/blog", categoryRoute)
app.use("/api/v1/blog", tagRoute)
app.use("/api/v1/blog", blogPostRoute)

//Error Handler
app.use(errorHandler)

app.listen(PORT, ()=>{
    mongoDBConnect()
    console.log(`Server running on port ${PORT}`.bgGreen.black);
})

