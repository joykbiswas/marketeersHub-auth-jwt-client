import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import HomeBanner from "./HomeBanner";
import { useState } from "react";
import JobCards from "./JobCards";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    const [selectedCategory,setSelectedCategory] = useState(null)

    // const filteredJobs = selectedCategory ? jobs
    //        :jobs.filter((job) => job.Category === selectedCategory)
    const filteredJobs = selectedCategory === "all" 
    ? jobs
    : selectedCategory 
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;
    return (
        <div>
            
            <HomeBanner></HomeBanner>
    
            <div className="my-3">
            <Category setSelectedCategory={setSelectedCategory}></Category>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    filteredJobs.map(aJob =>(
                        <JobCards key={aJob._id}
                        job ={aJob}
                        ></JobCards>
                    ))
                }
            </div>
           {/* <div>
            {
                jobs.map(aJob =>(
                    <JobCards key={aJob._id}
                    job ={aJob}
                    ></JobCards>
                ))
            }
           </div> */}
        </div>
    );
};

export default Home;