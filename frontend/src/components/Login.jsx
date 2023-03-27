import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    
  
   
    const handleSubmit =  (e) => {
      e.preventDefault();
      navigate('/'); 
          /*fetch("http://localhost:8000/users", {
          method: "GET",
         
        })
        .then((response) => {
          if (response.status === 200) {
            //check username and passw
            alert("Login successfully"); 
            navigate('/')                       
          }else{                               
            setMessage("Incorrect credential")   <p>{handleSubmit ? message : null}</p> da inserire nell html
          }
        })
        .catch(error => console.log(error))*/
    };


    return (
      
      <>
        
        <button type="button" class="btn btn-outline-dark m-2" data-bs-toggle="modal" data-bs-target="#myModal">
            <i class="fa fa-sign-in m-1"></i> 
          Login
        </button>

        <div class="modal fade  bg-dark overflow-auto" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" role="dialog" aria-hidden="true" data-bs-backdrop="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                <div class="modal-body">
                <form onSubmit={handleSubmit}>
                      <input type="hidden" name="_token" value=""></input>
                      <div class="form-group">
                          <label class="control-label">Username</label>
                          <div>
                              <input type="email" class="form-control " placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                          </div>
                      </div>
                      <div class="form-group">
                          <label class="control-label">Password</label>
                          <div>
                          <input type="password" class="form-control " placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                          </div>
                      </div>
                     
              </form>
        
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e)} data-bs-dismiss="modal">Login</button>
                </div>
            </div>
          </div>
        </div>
      </>
      );
  };
  
  export default Login;