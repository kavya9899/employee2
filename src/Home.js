import "./App.css"
import {Link } from "react-router-dom"
function Home(){
    return(
        <div className="home" style={{textAlign:"center",marginTop:"15%",color:"purple"}}>
            <h1 >BESANT EMPLOYEE MANAGEMENT SYSTEM</h1><br/><br/>
            <Link className="btn btn-info" style={{marginRight:"2%",marginLeft:"2%"}} to="/Signup">Registration</Link>
            <Link className="btn btn-info" style={{marginRight:"2%",marginLeft:"2%"}} to="/Login">Login</Link>
        </div>
    )
}
export default Home;