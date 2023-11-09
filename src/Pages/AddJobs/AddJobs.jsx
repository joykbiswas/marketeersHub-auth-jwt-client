import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJobs = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
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

    const addJobs = {
      email,
      category,
      jobTitle,
      deadline,
      minimumPrice,
      maximumPrice,
      description,
    };
    console.log(addJobs);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addJobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "user added job successfully",
            icon: "success",
            confirmButtonText: "Add job",
          });
        }

        // form.reset();
      });
    navigate("/myPosted_jobs");
  };
  return (
    <div>
      <Helmet>
        <title>Marketeers | AddJob</title>
      </Helmet>
      <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-3xl font-bold">Add Job</h2>
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
                  defaultValue={user?.email}
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
      </div>
    </div>
  );
};

export default AddJobs;
