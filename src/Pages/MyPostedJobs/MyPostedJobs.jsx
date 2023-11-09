// import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
  // const jobs =useLoaderData()

  const { user } = useContext(AuthContext);
  console.log("user", user?.email);
  const [jobs, setJobs] = useState([]);
  const url = `http://localhost:5000/jobs?email=${user?.email}`;
  // const url ='http://localhost:5000/jobs'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [url]);

  const handleDeleted = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your job details has been deleted.",
                icon: "success",
              });
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Marketeers | My Posted Jobs</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <MyPostedJobsCard
            key={job._id}
            job={job}
            handleDeleted={handleDeleted}
          ></MyPostedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
