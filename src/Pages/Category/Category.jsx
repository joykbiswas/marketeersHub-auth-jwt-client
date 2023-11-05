import PropTypes from "prop-types";
import { Tab, TabList,  Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = ({setSelectedCategory}) => {
    
    const handleButtonClick = (filter) => {
        // setActiveFilter(filter);
        setSelectedCategory(filter);
      };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab><button
        onClick={() => handleButtonClick("web development")}
        // className={`text-xl ${
        //   activeFilter === "EducationalConferences"
        //     ? "underline text-blue-500"
        //     : ""
        // }`}
      >
        Web Development
      </button></Tab>
          
          <Tab>
          <button
        onClick={() => handleButtonClick("digital marketing")}
        // className={`text-xl ${
        //   activeFilter === "TrainingPrograms" ? "underline text-blue-500" : ""
        // }`}
      >
        Digital Market
      </button>
          </Tab>
          <Tab>
          <button
        onClick={() => handleButtonClick("graphics design")}
        // className={`text-xl ${
        //   activeFilter === "TrainingPrograms" ? "underline text-blue-500" : ""
        // }`}
      >
        Graphics Design
      </button>
          </Tab>
        </TabList>





        {/* <TabPanel>
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
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Category;

Category.propTypes = {
    setSelectedCategory: PropTypes.func,
  };