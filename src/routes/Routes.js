import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Result from "../components/Result/Result";
import { Main } from "../layout/Main";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([

    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <PrivateRoute><Main /></PrivateRoute>,
        children: [
            {
                path: "/home",
                element: <PrivateRoute><Home /></PrivateRoute>,
            },
            {
                path: "/home/result",
                element: <PrivateRoute><Result /></PrivateRoute>,
            }
        ]
    },



]);