import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
function EmpForm(){
    const[id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [salary,setSalary]=useState("")
    const navigate=useNavigate
    const update=(e)=>{
         setName(e.target.value)
    }
    const update1=(e)=>{
      setEmail(e.target.value)
 }
 const update2=(e)=>{
  setMobile(e.target.value)
}
const update3=(e)=>{
  setSalary(e.target.value)
}
const update4=(e)=>{
    setId(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
  const data={id,name,email,mobile,salary}
     fetch("http://localhost:3006/Employee",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
     })
     .then(()=>{
      alert("saved succesfully..!!")
      
     })
     .catch(()=>{
      alert("Error....")
     })
}

    return(
      <div>
        <div className="offset-lg-3 col-lg-6">
<form className="container" style={{marginTop:"10%"}} onSubmit={handleSubmit}>
    <div className="card" style={{backgroundColor:"lightblue"}}>
        <div className="card-header" style={{textAlign:"center"}}>
           <h1>Employee Form</h1> 
        </div>
        <div className="card-body">
            <div className="column">
                <div className="col-lg-6">
                   <div className="form-group">
                    <label>ID</label>
                    <input onChange={update4} value={id} disabled="disabled" className="form-control"></input>
                   </div>
                </div>
               
                <div className="col-lg-6">
                   <div className="form-group">
                    <label>Fullname</label>
                    <input type="text" onChange={update} value={name} required className="form-control"></input>
                   </div>
                </div>
                <div className="col-lg-6">
                   <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={update1} value={email} required className="form-control"></input>
                   </div>
                </div>
                <div className="col-lg-6">
                   <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="number" onChange={update2}value={mobile} required className="form-control"></input>
                   </div>
                </div>
                <div className="col-lg-6">
                   <div className="form-group">
                    <label>Salary</label>
                    <input type="number" onChange={update3} value={salary} required className="form-control"></input>
                   </div>
                </div>
            </div>
        </div>
        <div className="card-footer">
        <button type='submit' style={{marginRight:"2%",marginLeft:"2%"}}  className="btn btn-primary" >Submit</button> 
        <Link   style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-danger" to="/EmpTable">Back</Link> 
        </div>
    </div>
</form>
</div>
         
         
        
         
        
         
        
      </div>
    )
  }
  export default EmpForm;