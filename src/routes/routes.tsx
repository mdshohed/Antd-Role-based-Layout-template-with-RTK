import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import Home from "../pages/Home";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(studentPaths)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
])

export default router;