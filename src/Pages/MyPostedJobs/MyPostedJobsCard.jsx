import PropTypes from "prop-types";

const MyPostedJobsCard = ({job}) => {
    const{jobTitle, deadline, maximumPrice, minimumPrice, description} = job;
    console.log(job);

    return (
        <div className="card  bg-white  border-sky-400 border-b-4 border-r-4  shadow-2xl stack">

        <div className="card-body items-start text-center flex">
          <h2 className="card-title text-2xl font-bold">JobTitle: {jobTitle}</h2>
           <div className="text-left space-y-2 flex-grow text-xl">
           <p>Deadline: {deadline}</p>
            <p>Price Range: ${minimumPrice} - ${maximumPrice}</p>
            <p >Description: {description}</p>
           </div>
          <div className=" justify-center text-center">
            <button className="btn btn-primary hover:bg-sky-400 hover:text-black hover:font-bold">Bid Now </button>
            {/* <button className="btn btn-ghost">Deny</button> */}
          </div>
        </div>
       </div>
    );
};

export default MyPostedJobsCard;


MyPostedJobsCard.propTypes = {
    job: PropTypes.func,
  };