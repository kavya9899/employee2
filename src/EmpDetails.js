import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function EmpDetails(){
    const [data,setData]=useState(null)
    const {empid}=useParams()
    useEffect(() => {
        fetch("http://localhost:3006/Employee/"+empid)
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
           setData(resp)
        })
    }, [])
    return(
        <div className="container" >
            <div className="card" style={{backgroundColor:"lightblue",marginTop:"2%"}} >
                <div className="card-title" style={{backgroundColor:"lightblue"}}>
                    <h3 >Employee Details</h3>
                </div>
                <div className="card-body" style={{backgroundColor:"lightblue"}}>
                   {data &&
                   <div>
                   <p>Employee Name is : {data.name} ({data.id})</p>
                   <p>Employee Email is : {data.email}</p>
                   <p>Employee Mobilenumber is : {data.mobile}</p>
                   <p>Employee Salary is : {data.salary}</p>
                   </div>
                   }
                   <Link to="/EmpTable" className="btn btn-danger">Back</Link>
                </div>
            </div>
        </div>
    )
}
export default EmpDetails;