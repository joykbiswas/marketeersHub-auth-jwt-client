import {createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyBids from "../Pages/MyBids/MyBids";
import UpdateJob from "../Components/UpdateJob/UpdateJob";

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
          // loader:()=> fetch(`http://localhost:5000/jobs?email=${user.email}`)
        },
        {
          path:'myPosted_jobs/updateJob/:id',
          element:<UpdateJob></UpdateJob>,
          loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/job/:id",
          element:<JobDetails></JobDetails>,
          loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/my_bids",
          element:<MyBids></MyBids>,
          
        }
      ]
    },
  ]);  



export default router;