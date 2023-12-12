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
import { Helmet } from "react-helmet";
import Qna from "./QNA/Qna";
import TeamMember from "./TeamMember/TeamMember";

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
      <Helmet>
        <title>Marketeers Hub | Home</title>
      </Helmet>
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
      
      
        <FindTalent></FindTalent>
       
        <Choose></Choose>
        <TeamMember></TeamMember>
        <Testimonal></Testimonal>
        <Qna></Qna>
      
    </div>
  );
};

export default Home;
