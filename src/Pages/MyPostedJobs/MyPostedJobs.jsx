import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";


const MyPostedJobs = () => {
    const jobs =useLoaderData()
    console.log(jobs);
    return (
        <div>
            {
                jobs.map(job =><MyPostedJobsCard 
                key={job._id}
                job={job}
                ></MyPostedJobsCard>)
            }
        </div>
    );
};

export default MyPostedJobs;