import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
  import { toast, Bounce } from 'react-toastify';

export default function Create() {
  const {register,handleSubmit} = useForm();
  const navigate = useNavigate();
  const registerForm =async(data)=>{
    const response=await axios.post(`${import.meta.env.VITE_BURL}/users`,data)
    console.log(response.data);
    if(response.status===201){
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
    else{
      alert("User Not Created")
    }
   
  }
  return (
    <>
    <h1>Create</h1>
    <div className="my-5 ">
      <form action="" onSubmit={handleSubmit(registerForm)}>
    <div className="form-floating mb-3">
  <input {...register('userName')}type="text" className="form-control" id="userEmail" placeholder="name@example.com" />
  <label htmlFor="floatingInput">User Name</label>
</div>
 <div className="form-floating mb-3">
  <input {...register('email')} type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
  <label htmlFor="floatingInput"> Email address</label>
</div>
 <div className="form-floating mb-3">
  <input {...register('password')} type="Password" className="form-control" id="userPassword" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Password</label>
</div>
<div className="form-floating mb-3">
  <input {...register('phone')} type="text" className="form-control" id="Phone" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Phone</label>
</div>
 <button type="submit" className="btn btn-primary">Submit</button>
 </form>
    </div>
    </>
  )
}
