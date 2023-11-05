import PropTypes from "prop-types";

// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

const JobCards = ({ job }) => {
    const{jobTitle, deadline, maximumPrice, minimumPrice, description} = job;
  console.log(job);
  return (
    <div>
      

      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-start text-center flex">
          <h2 className="card-title text-2xl font-bold">JobTitle: {jobTitle}</h2>
           <div className="text-left space-y-2 flex-grow text-xl">
           <p>Deadline: {deadline}</p>
            <p>Price Range: ${minimumPrice} - ${maximumPrice}</p>
            <p>Description: {description}</p>
           </div>
          <div className=" justify-center text-center">
            <button className="btn btn-primary">Bid Now </button>
            {/* <button className="btn btn-ghost">Deny</button> */}
          </div>
        </div>
      </div>

      {/* <div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            <h2>Any content 1</h2>
            <h2>Any content 1</h2>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <h2>Any content 2</h2>
            <h2>Any content 2</h2>
            <h2>Any content 2</h2>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div> */}
    </div>
  );
};

export default JobCards;
JobCards.propTypes = {
  job: PropTypes.object,
};
