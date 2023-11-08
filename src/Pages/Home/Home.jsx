import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
// import HomeBanner from "./HomeBanner";
import { useEffect, useState } from "react";
import JobCards from "./JobCards";
import FindTalent from "./FindTalent/FindTalent";
// import Form from "./Form/Form";
import Choose from "./Choose/Choose";
import Testimonal from "./Testimonal/Testimonal";
import OurSuccess from "./OurSuccess/OurSuccess";
import Banner from "./Banner";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  console.log("selected category:", filteredJobs);

  useEffect(() => {
    setSelectedCategory("web development"); // Set the default category here
  }, []);
  // const filteredJobs = selectedCategory === "all"
  // ? jobs
  // : selectedCategory
  // ? jobs.filter((job) => job.category === selectedCategory)
  // : jobs;
  return (
    <div>
      <Banner></Banner>
      <OurSuccess></OurSuccess>

      <div className="my-3">
        <Category setSelectedCategory={setSelectedCategory}></Category>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
        {filteredJobs.map((aJob) => (
          <JobCards key={aJob._id} job={aJob}></JobCards>
        ))}
      </div>
      
      <div>
        <FindTalent></FindTalent>
       
        <Choose></Choose>
        <Testimonal></Testimonal>
      </div>
    </div>
  );
};

export default Home;
