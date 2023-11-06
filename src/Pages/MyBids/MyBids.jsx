import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyBidsRow from "./MyBidsRow";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  // console.log('userinfo:',user);
  const [apply, setApply] = useState([]);
  const url = `http://localhost:5000/apply?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {credentials: "include"})
      .then((res) => res.json())
      .then((data) => setApply(data));
  }, [url]);

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
      <h1>my bid job:{apply.length}</h1>

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
