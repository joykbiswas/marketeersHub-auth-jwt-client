import PropTypes from "prop-types";

const MyPostedJobsCard = ({job}) => {
    const{jobTitle, deadline, maximumPrice, minimumPrice, description} = job;
    console.log(job);

    return (
        <div>
            
        </div>
    );
};

export default MyPostedJobsCard;


MyPostedJobsCard.propTypes = {
    job: PropTypes.func,
  };