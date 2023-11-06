import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const job = useLoaderData();
  const { jobTitle, deadline, maximumPrice, minimumPrice, description, email } =
    job;

  console.log(job);
  // form section
  const handleAddJob = (event) => {
    event.preventDefault();

    const form = event.target;
    const userEmail = form.email.value;
    const deadline = form.deadline.value;
    const price = form.price.value;

    const apply = {
      userEmail,
      email,
      jobTitle,
      deadline,
      price,
      description,
    };
    console.log(apply);

    fetch('http://localhost:5000/apply',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(apply)
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'You Apply Successfully',
          'success'
        )
      }
    })
  };

  return (
    <div>
      <div className="my-8 mx-5  card  bg-white  border-sky-300 border-b-4 border-r-4  shadow-2xl stack">
        <div className="card-body items-start text-center flex">
          <h2 className="card-title text-2xl font-bold">
            JobTitle: {jobTitle}
          </h2>
          <div className="text-left space-y-2 flex-grow text-xl">
            <p>Deadline: {deadline}</p>
            <p>
              Price Range: ${minimumPrice} - ${maximumPrice}
            </p>
            <p>Description: {description}</p>
          </div>

          {/* form section start */}
          <div className="w-full">
            <form onSubmit={handleAddJob}>
              {/* form row 1*/}
              <div className="md:flex ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className=" text-lg">Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full "
                      required
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="text-lg ">Buyer Email</span>
                  </label>
                  <label className="input-group">
                    <p className="border py-3">{email}</p>
                    {/* <input
                type="email"
                // name="email"
                defaultValue={email}
                placeholder="Enter your email"
                className="input input-bordered w-full "
                required
              /> */}
                  </label>
                </div>
              </div>
              {/* form row 2*/}
              <div className="md:flex ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="text-lg">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="price"
                      placeholder="you price"
                      className="input input-bordered w-full "
                      required
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="text-lg">Deadline</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="date"
                      name="deadline"
                      placeholder="Enter deadline"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Bid on the project"
                className="btn w-full bg-[#72c4f6] my-4"
              />
            </form>
          </div>
          {/* form section end */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;


