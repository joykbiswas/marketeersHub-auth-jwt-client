import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";


const MyPostedJobs = () => {
    const jobs =useLoaderData()
    console.log(jobs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 gap-6">
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