import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Error from "../shared/Error/Error";
import Blog from "../shared/Blog/Blog";
import Login from "../Home/Login/Login";
import Signup from "../Home/Signup/Signup";

 export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Signup',
                element:<Signup></Signup>
            }
        ]
    }
])