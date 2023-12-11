import { useContext, useEffect, useState } from "react";
import BidRequestRow from "./BidRequestRow";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const BidRequest = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `http://localhost:5000/apply_buyer?email=${user?.email}`;
  const url = `/apply_buyer?email=${user?.email}`;

  useEffect(() => {
    // fetch(url, {credentials: "include"})
    // .then(res =>res.json())
    // .then(data =>setBids(data))
    // .catch(error =>{
    //   console.log('Error fetching bids:', error);
    // setBids([])
    axiosSecure.get(url).then((res) => setBids(res.data));
    setBids([]);
  }, [url, axiosSecure]);

  const handleSelectedConform = (id) => {
    fetch(`http://localhost:5000/apply_buyer/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "conform" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if(data.modifiedCount > 0) {
        if (data.modifiedCount > 0) {
          // update status

          const remaining = bids.filter((bid) => bid._id !== id);
          const updated = bids.find((bid) => bid._id === id);
          updated.status = "confirm";
          const newApply = [updated, ...remaining];
          setBids(newApply);
        }
      });
  };

  console.log(bids);
  return (
    <div>
      <Helmet>
        <title>Marketeers | Bid Requests</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>User Email</th>
              <th>Job Title</th>
              <th>Price</th>
              <th>Deadline</th>
              <th> Status</th>
            </tr>
          </thead>
         

          <tbody>
            {Array.isArray(bids) ? (
              bids.map((bid) => (
                <BidRequestRow
                  key={bid._id}
                  bid={bid}
                  handleSelectedConform={handleSelectedConform}
                ></BidRequestRow>
              ))
            ) : (
              <tr>
                <td colSpan="4">No bids available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
