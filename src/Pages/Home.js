import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [users, setUsers] = useState([]);

  const{id}=useParams()
  
  const loadUsers=async()=>{
    try{
    const result=await axios.get("/users");
    setUsers(result.data);//ensure result.data is an array
    console.log("Users fetched:",result.data);
    }catch(error){
      console.error("Error fetching users:", error.message);
      setUsers([]);
    }
  //console.log(result.data);
};

useEffect(()=>{
  //console.log("Learn with V.")
  loadUsers();
},[]);

const deleteUser = async (id)=>{
  await axios.delete(`/user/${id}`)
  loadUsers();
};

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
        users.map((user,index)=>{
          //console.log(user)
          return(  
          <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-primary mx-2">View</button>
              <Link className="btn btn-outline-primary mx-2" 
              to={`/edituser/${user.id}`}
              >
                Edit</Link>

              <button className="btn btn-danger mx-2"
              onClick={() =>deleteUser(user.id)}
                >Delete</button>
                
            </td>
            </tr>)
          //this is used to add data manually and index+1 is for counting
        })
      }
  </tbody>    
</table>
        </div>
    </div>
  )
}
