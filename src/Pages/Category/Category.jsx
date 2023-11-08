import PropTypes from "prop-types";
import { Tab, TabList,  Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = ({setSelectedCategory}) => {
    
    const handleButtonClick = (filter) => {
       console.log("selected category:" ,filter);
        setSelectedCategory(filter);
      };

  return (
    <div className="ml-6 lg:ml-0">
      <Tabs>
        <TabList>
          <Tab><button
        onClick={() => handleButtonClick("web development")}
      >
        Web Development
      </button></Tab>
          
          <Tab>
          <button
        onClick={() => handleButtonClick("digital marketing")}
      
      >
        Digital Market
      </button>
          </Tab>
          <Tab>
          <button
        onClick={() => handleButtonClick("graphics design")}
       
      >
        Graphics Design
      </button>
          </Tab>
        </TabList>

      </Tabs>
    </div>
  );
};

export default Category;

Category.propTypes = {
    setSelectedCategory: PropTypes.array,
  };

