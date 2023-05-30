import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const SignUp=()=>{
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[pswd,pswdchange]=useState("");
    const[cpswd,cpswdchange]=useState("");
    const navigate=useNavigate();

    const IsValidate=(e)=>{
        e.preventDefault();
        if(name.length<5){
           alert("Enter name correctly..") 
        }
        else if(pswd!==cpswd){
            alert("Password does not match..")
        }
        else{
            alert("Registered successfully..")
            
            let regobj={name,email,pswd,cpswd}
            fetch("http://localhost:3006/users",{
            method:"POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(regobj)
        }).then((res)=>{
              navigate("/Login")
        }).catch((err)=>{
              alert("Failed:"+err.message); 
        });
        }
    }

    
    return(
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" style={{marginTop:"10%"}}onSubmit={IsValidate}>
                    <div className="card" style={{backgroundColor:"lightblue"}}>
                        <div className="card-header" style={{textAlign:"center"}}>
                           <h1>Registration</h1> 
                        </div>
                        <div className="card-body">
                            <div className="column">
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Full Name</label>
                                    <input value={name}  onChange={e=>namechange(e.target.value)} type="text"className="form-control"></input>
                                   </div>
                                </div>
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e=>emailchange(e.target.value)}type="email"className="form-control"></input>
                                   </div>
                                </div>
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Password</label>
                                    <input value={pswd} onChange={e=>pswdchange(e.target.value)} type="password"className="form-control"></input>
                                   </div>
                                </div>
                                <div className="col-lg-6">
                                   <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input value={cpswd} onChange={e=>cpswdchange(e.target.value)}type="password"className="form-control"></input>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                        <button type='submit' style={{marginRight:"2%",marginLeft:"2%"}}  className="btn btn-primary" >SignUp</button> 
                        <Link type='submit'  style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-danger" to="/">Back</Link> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;