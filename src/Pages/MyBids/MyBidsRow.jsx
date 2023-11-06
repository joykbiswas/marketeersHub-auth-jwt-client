
const MyBidsRow = ({apply,handleSelectedConform}) => {
    const {email,jobTitle,description,status} = apply
    console.log(apply);
    return (
        <tr>
            <td>
                {email}
            </td>
            <td>
                {jobTitle}
            </td>
            <td>
                {description}
            </td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleSelectedConform(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
            
        </tr>
    );
};

export default MyBidsRow;