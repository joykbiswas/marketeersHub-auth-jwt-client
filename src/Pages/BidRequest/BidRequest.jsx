import { useContext, useEffect, useState } from "react";
import BidRequestRow from "./BidRequestRow";
// import { UNSAFE_DataRouterStateContext } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BidRequest = () => {
    const {user} = useContext(AuthContext)
    // console.log('userinfo:',user);
    const [bids, setBids] = useState([]);
    const url = `http://localhost:5000/apply?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>setBids(data))
    },[url,setBids])

    const handleSelectedConform = (id, newStatus) =>{
        fetch(`http://localhost:5000/apply/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify({status: newStatus})
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            // if(data.modifiedCount > 0) {
            if(data.matchedCount > 0) {
                // update status

                const remaining = bids.filter(bid =>bid._id !== id)
                const updated = bids.find(bid => bid._id === id)
                updated.status = 'confirm'
                const newApply = [updated, ...remaining];
                setBids(newApply);

                // const updatedBids = bids.map((bid) => {
                //     if (bid._id === id) {
                //         return { ...bid, status: newStatus };
                //     }
                //     return bid;
                // });
                // setBids(updatedBids);
                
            }
        })
    }

    console.log(bids);
    return (
        <div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>User Email</th>
              <th>Job Title</th>
              <th>Description</th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <BidRequestRow
                key={bid._id}
                bid={bid}
                handleSelectedConform={handleSelectedConform}
              ></BidRequestRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default BidRequest;