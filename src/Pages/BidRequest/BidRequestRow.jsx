import PropTypes from "prop-types";

const BidRequestRow = ({ bid, handleSelectedConform }) => {
  const { _id, userEmail, jobTitle, price, deadline, status } = bid;

  // console.log(bid);
  return (
    <tr>
      <td>{userEmail}</td>
      <td>{jobTitle}</td>
      <td>{price}</td>
      <td>{deadline}</td>
      <td>
        <th>
          {status === "confirm" ? (
            <span className="font-bold text-primary">Confirmed</span>
          ) : (
            <button
              onClick={() => handleSelectedConform(_id)}
              className="btn btn-ghost btn-xs"
            >
              Please Confirm
            </button>
          )}
        </th>
        <th>
          <button>Reject</button>
        </th>
      </td>

      
     
      
    </tr>
  );
};

export default BidRequestRow;

BidRequestRow.propTypes = {
  bid: PropTypes.array,
  handleSelectedConform: PropTypes.func,
};
