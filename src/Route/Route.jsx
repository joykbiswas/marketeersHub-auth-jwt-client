import {createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=> fetch('http://localhost:5000/jobs')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/add_job",
          element:<AddJobs></AddJobs>

        },
        {
          path:"myPosted_jobs",
          element:<MyPostedJobs></MyPostedJobs>,
          loader:()=> fetch('http://localhost:5000/jobs')
        },
        {
          path:"/job/:id",
          element:<JobDetails></JobDetails>,
          loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);  



export default router;