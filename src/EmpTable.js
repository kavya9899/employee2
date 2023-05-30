 import { useEffect, useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import axios from "axios";
 import ReactPaginate from "react-paginate";
 function EmpTable(){
    const[data,setData]=useState(null)
    const[value,setValue]=useState("")
    const navigate=useNavigate()
    const options=["name","email","salary","mobile"]
    const[sort,setSort]=useState("")
    
    const handlepageclick=async(e)=>{
        console.log(e.selected)

        let currentpage = e.selected+1
        const commentFormServer = await fetchComments(currentpage)
        setData(commentFormServer) 
    }
    

    const fetchComments=async(currentpage)=>{
        const res = await fetch(`http://localhost:3006/Employee?_page=${currentpage}&_limit=2`)
        const dat = await res.json()
        return dat
    }


    
    useEffect(()=>{
        fetch(`http://localhost:3006/Employee?_page=1&_limit=5`)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
            setData(resp)
        })
    },[])

    const SearchData=(e)=>{
        setValue(e.target.value)
    }

    const onDelete=(id)=>{
        if(window.confirm("Do you Delete?")){
        fetch("http://localhost:3006/Employee/"+id,{
            method:"DELETE"
        })
        .then(()=>{
            alert("Deleted successfully...!")
            window.location.reload()
        })
    }   
    }

    const onEdit=(id)=>{
        navigate("/empedit/"+id)
    }

    const onDetails=(id)=>{
        navigate("/empdetails/"+id)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        return await axios.get(`http://localhost:3006/Employee?q=${value}`)
        .then((res)=>{
            setData(res.data)
            setValue("")

        })
        .catch((err)=>{
            console.log(err)
        })

    }

    const reset=(e)=>{
        e.preventDefault()
        fetch("http://localhost:3006/Employee")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.log(resp)
            setData(resp)
        })

    }

    const sortData=async(e)=>{
        let value=e.target.value
        setSort(value)
        return await axios.get(`http://localhost:3006/Employee?_sort=${value}&_order=asc`)
        .then((res)=>{
            setData(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })

    }
 
   


     return (
         <div className="container" style={{backgroundColor:"lightpink",padding:"2%",marginTop:"2%",marginBottom:"2%"}}>
             <form onSubmit={handleSubmit}>
                 <div className=""style={{backgroundColor:"lightpink"}}>
                     <label style={{backgroundColor:"lightpink",marginBotton:"2%"}}className="form-label">Search</label>
                     <input style={{marginBotton:"2%"}}type="text" value={value}  onChange={SearchData} className="form-control" />
                 </div><br/>
                 <div style={{backgroundColor:"lightpink"}}>
                 <button type="submit" style={{marginRight:"2%"}} className="btn btn-primary">Search</button>
                 <button onClick={reset} style={{marginRight:"76%",marginLeft:"2%"}} className="btn btn-primary">Reset</button>
            
                     <Link type="submit" to="/Login" className="btn btn-secondary">Logout</Link>
                 </div>
             </form><br/>
             <select value={sort} onChange={sortData}>
                 <option >Choose option</option>
                 {options.map((item)=>(
                     <option>{item}</option>
                 ))}
             </select><br/><br/>
             <div className="card">
                 <div className="card-body" style={{backgroundColor:"lightblue"}}>
                 <h3 style={{textAlign:"center"}}>Besant Employee Management System</h3> 
                     <Link to="/form" className="btn btn-success">
                         Add New (+)
                     </Link><br/><br/>
                     <table className="table table-bordred">
                         <thead style={{backgroundColor:"black",color:"white"}}>
                             <tr>
                                 <th>ID</th>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Mobile</th>
                                 <th>Salary</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>
                         <tbody style={{backgroundColor:"lightblue"}}>
                             {data && data.map((item) => (
                                 <tr>
                                     <td>{item.id}</td>
                                     <td>{item.name}</td>
                                     <td>{item.email}</td>
                                     <td>{item.mobile}</td>
                                     <td>{item.salary}</td>
                                     <td>
                                         <a onClick={() => { onDelete(item.id) }} style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-danger">Delete</a>
                                         <a onClick={() => { onEdit(item.id) }} style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-success">Edit</a>
                                         <a onClick={() => { onDetails(item.id) }} style={{marginRight:"2%",marginLeft:"2%"}} className="btn btn-primary">Details</a>
                                     </td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                     <div>
                 <ReactPaginate
                 previousLabel={"previous"}
                 nextLabel={"next"}
                 pageCount={5}
                 onPageChange={handlepageclick}
                 containerClassName={'pagination justify-content-center'}
                 pageClassName={'page-item'}
                 pageLinkClassName={'page-link'}
                 previousLinkClassName={'page-link'}
                 nextLinkClassName={'page-link'}
                 activeClassName={'active'}
                 />
                
                
             </div>
                 </div>
                
             </div>

         </div>
     )
 }

 export default EmpTable;
