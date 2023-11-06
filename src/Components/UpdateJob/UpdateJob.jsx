// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateJob = () => {
    const job  = useLoaderData()
    // console.log(job);
    const{_id, email,category,  jobTitle, deadline, maximumPrice, minimumPrice, description} = job;

    const handleUpdateJob = event =>{
        event.preventDefault();

        const form = event.target;
        email
        const category = form.category.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const maximumPrice = form.maximumPrice.value;
        const minimumPrice = form.minimumPrice.value;
        const description = form.description.value;

        const updatedJob = {email,category,  jobTitle, deadline, maximumPrice, minimumPrice, description}
        console.log(updatedJob);
        //send data to the server
        fetch(`http://localhost:5000/jobs/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updatedJob)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0) {
                Swal.fire({
                    title: 'success!',
                    text: 'job updated successfully',
                    icon: 'success',
                    confirmButtonText: 'updated'
                  })

            }
        })


    }
    return (
        <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-3xl font-bold">Add Job</h2>
        <form onSubmit={handleUpdateJob}>
          {/* form row 1*/}
          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group border p-3  bg-white">
              <p>{email}</p>
                {/* <input
                  type="email"
                  name="email"
                //   defaultValue={email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full "
                  required
                /> */}
                
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
                defaultValue={category}
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
                  defaultValue={jobTitle}
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
                  defaultValue={deadline}
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
                  defaultValue={minimumPrice}
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
                  defaultValue={maximumPrice}
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
                  defaultValue={description}
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Job"
            className="btn w-full bg-[#f5d789]"
          />
        </form>
      </div>
    );
};

export default UpdateJob;