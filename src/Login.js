import {useState } from "react";
import { Link, useNavigate } from "react-router-dom"


const Login=()=>{
const [name,nameupdate]=useState("");
const [pswd,pswdupdate]=useState("");
const navigate=useNavigate();

const ProceedLogin=(e)=>{
    
    e.preventDefault()
    fetch("http://localhost:3006/users")
    .then((res)=>{
        return res.json()
    })
    .then((resp)=>{
     
     const result =resp.find(val=>val.name===name)
     if(name===result.name && pswd===result.pswd){
      alert("successfull")
      navigate("/EmpTable")

     }
     else{
      alert("unsuccessfull")
     }
    
    })
   
}
    return(
      <div>
          <div className="offset-lg-3 col-lg-6">
                <form className="container" style={{marginTop:"10%"}}onSubmit={ProceedLogin}>
                    <div className="card" style={{backgroundColor:"lightblue"}}>
                        <div className="card-header"style={{textAlign:"center"}}>
                           <h1>Login</h1> 
                        </div>
                        <div className="card-body">
                            <div className="column">
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Full Name</label>
                                    <input  value={name} onChange={e=>nameupdate(e.target.value)} type="text"className="form-control"></input>
                                   </div>
                                </div>
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Password</label>
                                    <input value={pswd} onChange={e=>pswdupdate(e.target.value)}type="password"className="form-control"></input>
                                   </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="card-footer">
                        <button type='submit'  style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-primary">Login</button> 
                        <Link type='submit'  style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-secondary" to="/SignUp">New Employee</Link> 
                        </div>
                    </div>
                </form>
          </div>
      </div>
    );
}
export default Login;