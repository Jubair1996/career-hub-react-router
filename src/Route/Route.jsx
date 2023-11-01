import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/appliedjobs',
            element: <AppliedJobs></AppliedJobs>
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: () => fetch('../jobs.json')
        }
      ]
    },
  ]);

export default router;