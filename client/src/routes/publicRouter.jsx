import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import LayOut from "../components/LayOut/LayOut";
import Admin from "../pages/Admin/Admin";
import Tags from "../components/Tag/Tags";
import Categories from "../components/Categories/Categories";
import Post from "../components/Post/Post";
import SingleBlog from "../pages/Blog/SingleBlog";

//Create public router
const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: '/',
                element: <Blog />
            },
            {
                path : 'admin',
                element : <Admin />,
                children : [
                    
                    {
                        path : "post",
                        element :  <Post />
                    },
                    {
                        path : "tag",
                        element :  <Tags />
                    },
                    {
                        path : "category",
                        element :  <Categories />
                    }
                ]
            },
            {
                path: "/:id",
                element: <SingleBlog />
            },
        ]
    },
]);

export default publicRouter;