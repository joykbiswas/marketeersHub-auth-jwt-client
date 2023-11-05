import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job =useLoaderData();
    const{ jobTitle, deadline, maximumPrice, minimumPrice, description} = job;

    console.log(job);
    // form section
    const handleAddJob = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const email = form.email.value;
        const category = form.category.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
    
        const addJobs ={email, category, jobTitle, deadline, minimumPrice, maximumPrice, description }
        console.log(addJobs);

    }

    return (
        <div>
            <div className="card  bg-white  border-sky-400 border-b-4 border-r-4  shadow-2xl stack">

<div className="card-body items-start text-center flex">
  <h2 className="card-title text-2xl font-bold">JobTitle: {jobTitle}</h2>
   <div className="text-left space-y-2 flex-grow text-xl">
   <p>Deadline: {deadline}</p>
    <p>Price Range: ${minimumPrice} - ${maximumPrice}</p>
    <p >Description: {description}</p>
   </div>
   
   {/* form section start */}
   <form onSubmit={handleAddJob}>
        {/* form row 1*/}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
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
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>

            <select
              className="select select-bordered join-item"
              type="category"
              name="category"
            >
              <option disabled selected>
                category
              </option>
              <option>web development</option>
              <option>digital marketing</option>
              <option>graphics design</option>
              required
            </select>

          </div>
        </div>
        {/* form row 2*/}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="jobTitle"
                placeholder="job title"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Deadline</span>
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
        {/* form row 3*/}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Minimum Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="minimumPrice"
                placeholder="minimum price"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Maximum Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="maximumPrice"
                placeholder="maximum price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form row 4*/}
        <div className="mb-4 ">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>

            <label className="input-group">
              <input
                type=""
                name="description"
                placeholder="Enter job description"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Job"
          className="btn w-full bg-[#f5d789]"
        />
      </form>
   {/* form section end */}

</div>
</div>
        </div>
    );
};

export default JobDetails;