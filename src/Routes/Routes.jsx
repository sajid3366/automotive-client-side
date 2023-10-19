import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Sigup/Signup";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Tesla from "../Pages/SubBrands/Tesla";
import Ferrari from "../Pages/SubBrands/Ferrari";
import Bmw from "../Pages/SubBrands/Bmw";
import Ford from "../Pages/SubBrands/Ford";
import Toyota from "../Pages/SubBrands/Toyota";
import RollsRoyce from "../Pages/SubBrands/RollsRoyce";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path: "/addproduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/mycart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5000/carcart')
            },
            {
                path:"/tesla",
                element: <Tesla></Tesla>,
                loader:()=>fetch(`http://localhost:5000/product/Tesla`)
            },
            {
                path: "/tesla/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/Tesla/`)
            },
            {
                path:"/ferrari",
                element: <Ferrari></Ferrari>,
                loader:()=>fetch(`http://localhost:5000/product/Ferrari`)
            },
            {
                path: "/ferrari/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/Ferrari/`)
            },
            {
                path:"/bmw",
                element: <Bmw></Bmw>,
                loader:()=>fetch(`http://localhost:5000/product/BMW`)
            },
            {
                path: "/bmw/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/BMW/`)
            },
            {
                path:"/ford",
                element: <Ford></Ford>,
                loader:()=>fetch(`http://localhost:5000/product/Ford`)
            },
            {
                path: "/ford/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/Ford/`)
            },
            {
                path:"/toyota",
                element: <Toyota></Toyota>,
                loader:()=>fetch(`http://localhost:5000/product/Toyota`)
            },
            {
                path: "/toyota/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/Toyota/`)
            },
            {
                path:"/rollsroyce",
                element: <RollsRoyce></RollsRoyce>,
                loader:()=>fetch(`http://localhost:5000/product/Roll-Royce`)
            },
            {
                path: "/rollsroyce/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() =>fetch(`http://localhost:5000/product/RollsRoyce/`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/product/update/${params.id}`)

            }
            
        ]
    }
])

export default router;