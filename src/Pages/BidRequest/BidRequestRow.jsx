import PropTypes from "prop-types";


const BidRequestRow = ({ bid, handleSelectedConform }) => {
  const { _id,userEmail, jobTitle,price, deadline, status } = bid;

  console.log(bid);
  return (
    <tr>
      <td>{userEmail}</td>
      <td>{jobTitle}</td>
      <td>{price}</td>
      <td>{deadline}</td>
      <td>
      <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleSelectedConform(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
            <th>
            <button
            >
                 Reject
            </button>
            </th>
            </td>



      {/* <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Accepted</span> :
                        <button onClick={() => handleSelectedConform(_id)} className="btn btn-ghost btn-xs">ACCEPT</button>}
            </th>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Rejected</span> :
                        <button onClick={() => handleSelectedConform(_id)} className="btn btn-ghost btn-xs">Reject</button>}
            </th> */}
      {/* <td>
                {status === 'confirm' ? (
                    <span className="font-bold text-primary">Accepted</span>
                ) : (
                    <>
                        <button
                            onClick={() => handleSelectedConform(_id, 'confirm')}
                            className="btn btn-ghost btn-xs"
                        >
                            ACCEPT
                        </button>
                        <button
                            onClick={() => handleSelectedConform(_id, 'reject')}
                            className="btn btn-ghost btn-xs"
                        >
                            Reject
                        </button>
                    </>
                )}
            </td> */}
{/* 
      <td>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Accepted</span>
        ) : (
          <>
            <button
              onClick={() =>
                handleSelectedConform(_id, status === "add" ? "confirm" : "add")
              }
              className={`btn btn-ghost btn-xs ${
                status === "add" ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              {status === "add" ? "Added" : "Add"}
            </button>
          </>
        )}
      </td> */}
    </tr>
  );
};

export default BidRequestRow;

BidRequestRow.propTypes = {
    bid: PropTypes.array,
    handleSelectedConform: PropTypes.func,
  };