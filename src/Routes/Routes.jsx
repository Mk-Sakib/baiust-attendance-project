import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Register/Login";
import Signup from "../Register/Signup";
import Dashboard from "../Layout/DashBoard";
import AdminHome from "../Pages/AdminDashboard/AdminHome";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile";
import StudentsDetails from "../Pages/AdminDashboard/StudentsDetails";
import ManageAttendance from "../Pages/AdminDashboard/ManageAttendance";

export const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/Login",
                    element: <Login></Login>
                },
                {
                    path: "/Signup",
                    element: <Signup></Signup>
                },
                
            ]
        },


        {
            path: "dashboard",
            element: <Dashboard/>,
            children: [
                {
                    path: "AdminHome",
                    element: <AdminHome/>
                },
                {
                    path: "AdminProfile",
                    element: <AdminProfile />
                },
                {
                    path: "StudentsDetails",
                    element: <StudentsDetails />
                },
                {
                    path: "ManageAttendance",
                    element: <ManageAttendance />
                },
            ]
        }

    ]
)