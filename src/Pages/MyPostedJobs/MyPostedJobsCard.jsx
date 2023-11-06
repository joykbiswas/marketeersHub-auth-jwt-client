import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyPostedJobsCard = ({job, handleDeleted}) => {
    const{_id, jobTitle, deadline, maximumPrice, minimumPrice, description} = job;
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
          <div className="  card-actions   ">
            <Link to={`updateJob/${_id}`}>
               <button className="btn btn-primary hover:bg-sky-400 hover:text-black hover:font-bold">Update </button>
            </Link>
            <button onClick={() => handleDeleted(_id)}
             className="btn btn-ghost">delete</button>
          </div>
        </div>
       </div>
    );
};

export default MyPostedJobsCard;


MyPostedJobsCard.propTypes = {
    job: PropTypes.array,
    handleDeleted: PropTypes.func,
  };