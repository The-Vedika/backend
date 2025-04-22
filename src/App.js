import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import axios from 'axios';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddUser from "./users/Adduser";
import Edituser from './users/Edituser';


function App() {
  axios.defaults.baseURL="http://localhost:8080";
  //console.log("Base URL set to:", axios.defaults.baseURL);
  //baseURL only path /users
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser />}/>
        <Route exact path="/edituser/:id" element={<Edituser/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
