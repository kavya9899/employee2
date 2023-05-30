 import React from 'react';
 import EmpTable from "./EmpTable"
import EmpForm from "./EmpForm"
 import EmpEdit from "./EmpEdit"
 import EmpDetails from "./EmpDetails"
 import Login from "./Login"
 import SignUp from "./Registration"
 import Home from "./Home"
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

 function App(){
   return(
     <div>
        <Router>
           <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path="/Signup" element={<SignUp/>}></Route>
           <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/EmpTable" element={<EmpTable/>}></Route>
           <Route exact path="/form" element={<EmpForm/>}></Route>
           <Route exact path="/empedit/:empid" element={<EmpEdit/>}></Route>
           <Route exact path="/empdetails/:empid" element={<EmpDetails/>}></Route>
         </Routes>
       </Router>
    </div>
 )
 }
 export default App