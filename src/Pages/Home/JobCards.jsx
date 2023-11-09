import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const JobCards = ({ job }) => {
  const { _id, jobTitle, deadline, maximumPrice, minimumPrice, description } =
    job;
  console.log(job);
  return (
    <div
      className="mx-4 lg:ml-0  card  bg-white  border-sky-400 border-b-4 border-r-4  shadow-2xl stack"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="card-body items-start text-center flex">
        <h2 className="card-title text-2xl font-bold">JobTitle: {jobTitle}</h2>
        <div className="text-left space-y-2 flex-grow text-xl">
          <p>Deadline: {deadline}</p>
          <p>
            Price Range: ${minimumPrice} - ${maximumPrice}
          </p>
          <p>Description: {description}</p>
        </div>
        <div className=" justify-center text-center">
          <Link to={`/job/${_id}`}>
            <button className="btn btn-primary hover:bg-sky-400 hover:text-black hover:font-bold">
              Bid Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
JobCards.propTypes = {
  job: PropTypes.object,
};
