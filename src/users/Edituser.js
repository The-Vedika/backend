import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function Edituser() {

let navigate=useNavigate();


  const {id}=useParams()

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
    await axios.put(`/user/${id}`,user)
    navigate("/");
  };

  const loadUser =async () => {
    const result=await axios.get(`/user/${id}`)
    setUsers(result.data)
    
  };

  // useEffect(()=>{
  //   loadUser();
  // },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center ">Edit User</h2>
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
