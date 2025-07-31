import React from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../../components/Custom/useFetch';
import Loader from '../../components/looder/Loader';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
  import { toast, Bounce } from 'react-toastify';
export default function Update() {

  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`users/${id}`);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
    console.log(data)
  console.log(data);
  if (isLoading) return <Loader />

  if (error) return <div>Error</div>;

  const registerForm = async (data) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BURL}/users/${id}`,
      data
    );
  
    if(response.status===200){
      toast.success("Created Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/");
    }
   
   
  }

  return (
    <>
      <h1>Create</h1>
      <div className="my-5 ">
        <form action="" onSubmit={handleSubmit(registerForm)}>
          <div className="form-floating mb-3">
            <input
              defaultValue={data.user._id}
              type="text"
              className="form-control"
              id="Id"
              placeholder="name@example.com"
              disabled
            />
            <label htmlFor="floatingInput">Id</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("userName")}
              type="text"
              className="form-control"
              id="userEmail"
              defaultValue={data.user.userName}
                  placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              defaultValue={data.user.email}
              type="email"
              className="form-control"
              id="userEmail"
              placeholder="name@example.com"
              disabled
            />
            <label htmlFor="floatingInput"> Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="Phone"
              placeholder="name@example.com"
              defaultValue={data.user.phone}
              disabled
            />
            <label htmlFor="floatingInput">Phone</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
