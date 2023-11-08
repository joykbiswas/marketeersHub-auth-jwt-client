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
import BidRequest from "../Pages/BidRequest/BidRequest";
import PrivateRoute from "../Components/Root/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=> fetch('https://marketeers-hub-auth-jwt-server.vercel.app/jobs')
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
          element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>

        },
        {
          path:"myPosted_jobs",
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
          // loader:()=> fetch(`https://marketeers-hub-auth-jwt-server.vercel.app/jobs?email=${user.email}`)
        },
        {
          path:'myPosted_jobs/updateJob/:id',
          element:<UpdateJob></UpdateJob>,
          loader:({params}) =>fetch(`https://marketeers-hub-auth-jwt-server.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/job/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params}) =>fetch(`https://marketeers-hub-auth-jwt-server.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/my_bids",
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
          
        },
        {
          path:"/bid_requests",
          element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute>
        }
      ]
    },
  ]);  



export default router;