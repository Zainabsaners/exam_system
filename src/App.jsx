import React from "react";
import './App.css';
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Admin from "./components/ExamPortal/Admin";
import Student from "./components/StudentPortal/Student";
import Login from "./components/Authentication/Login";
import { Navigate } from "react-router-dom";
import Register from "./components/RegistrarPortal/Register";
// import ProtectedRoute from "./components/Authentication/Layout/ProtectedRoute";
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Login/" element={<Login/>}/>
                
                {/* Exam management */}
                <Route path="/ExamPortal/*" element={
                  
                        <Admin/>
                    
                    }/>

                    {/* core focus entity */}
                <Route path="/StudentPortal/*" element={
                  
                        <Student/>
                  
                    }/>
                    
                    {/* finance & exam fee management */}
                {/* <Route path="/FinancePortal/*" element={
                    
                        <Finance/>
                    
                        }/> */}
                    {/* student registration and academic management** */}
                {/* <Route path="/RegistrarPortal/*" element={
                    
                        <Register/>
                   
                        }/> */}
                    {/* school management */}
                {/* <Route path="/DeanPortal/*" element={
                    
                        <Academic/>
                   
                        }/> */}
                    {/* School Department Mnagement and exam results upload**  */}
                {/* <Route path="/HoDPortal/*" element={
                    
                        <Academic/>
                   
                        }/> */}
                    {/* Exam & results upload** */}
                {/* <Route path="/LecturerPortal/*" element={
                   
                        <Teacher/>
                    
                        }/> */}
                <Route path="*" element={<Login/>}/>
            </Routes>
        </Router>
    );
}
export default App;