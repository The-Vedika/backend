import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Adduser() {

let navigate=useNavigate()

  const [user, setUsers]=useState({
    name:"",
    username:"",
    email:""
  })

  const{name,username,email}=user

  const onInputChange=(e)=>{
    setUsers({...user,[e.target.name]: e.target.value});
    //console.log(e.target.value);

  };
  
  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log("I'm on submit");
    await axios.post("http://localhost:8080/user",user)
    navigate("/");
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center ">Register User</h2>
        
       <form onSubmit={(e)=>onSubmit(e)}>      
          <div className="mb-3">
          <label htmFor="Name" className="form-label">
            Name
          </label>
          <input 
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={name}
           onChange={(e)=>onInputChange(e)} 
          />
        </div>
        <div className="mb-3">
          <label htmFor="Username" className="form-label">
            Username
          </label>
          <input 
          type="text"
          className="form-control"
          placeholder="Enter your Username"
          name="username"
          value={username} 
           onChange={(e)=>onInputChange(e)}
          />
          
        </div>
        <div className="mb-3">
          <label htmFor="email" className="form-label">
            e-mail address
          </label>
          <input 
          type="text"
          className="form-control"
          placeholder="Enter your e-mail address"
          name="email"
          value={email} 
           onChange={(e)=>onInputChange(e)}
          />
        
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <button type="cancel" className="btn btn-outline-danger mx-2">Cancel</button>
        </form>
      </div>
    </div>
  </div>
  
  );
}
