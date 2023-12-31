import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyBidsRow from "./MyBidsRow";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [apply, setApply] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `http://localhost:5000/apply?email=${user?.email}`;

  const url = `/apply?email=${user?.email}`;

  useEffect(() => {
    // fetch(url, {credentials: "include"})
    //   .then((res) => res.json())
    //   .then((data) => setApply(data));
    axiosSecure.get(url)
    .then(res =>setApply(res.data))
    
  }, [url, axiosSecure]);

  const handleSelectedConform = (id) => {
    fetch(`http://localhost:5000/apply/${id}`, {
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
        if (data.matchedCount > 0) {
          // update status
          const remaining = apply.filter((aApply) => aApply._id !== id);
          const updated = apply.find((aApply) => aApply._id === id);
          updated.status = "confirm";
          const newApply = [updated, ...remaining];
          setApply(newApply);
        }
      });
  };

  console.log(apply);
  return (
    <div>
       <Helmet>
        <title>Marketeers | My Bids</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Job Title</th>
              <th>Description</th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody>
            {apply.map((aApply) => (
              <MyBidsRow
                key={aApply._id}
                apply={aApply}
                handleSelectedConform={handleSelectedConform}
              ></MyBidsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
