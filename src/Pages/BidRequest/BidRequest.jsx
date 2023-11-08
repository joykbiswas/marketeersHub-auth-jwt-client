import { useContext, useEffect, useState } from "react";
import BidRequestRow from "./BidRequestRow";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const BidRequest = () => {
    const {user} = useContext(AuthContext)
    const [bids, setBids] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const url = `https://marketeers-hub-auth-jwt-server.vercel.app/apply?email=${user?.email}`;
    const url = `/apply_byer?email=${user?.email}`;

    useEffect(() =>{
        // fetch(url, {credentials: "include"})
        // .then(res =>res.json())
        // .then(data =>setBids(data))
        // .catch(error =>{
        //   console.log('Error fetching bids:', error);
          // setBids([])
          axiosSecure.get(url)
         .then(res =>setBids(res.data))
         setBids([]);
        
    },[url,axiosSecure])

    const handleSelectedConform = (id, newStatus) =>{
        fetch(`https://marketeers-hub-auth-jwt-server.vercel.app/apply/${id}`, {
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
              <th>Price</th>
              <th>Deadline</th>
              <th> Status</th>
            </tr>
          </thead>
          {/* <tbody>
            { 
            bids.map((bid) => (
              <BidRequestRow
                key={bid._id}
                bid={bid}
                handleSelectedConform={handleSelectedConform}
              ></BidRequestRow>
            ))
          }
          </tbody> */}

          <tbody>
            { Array. isArray(bids) ?(
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
            )
          }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default BidRequest;