import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentSidebar from "../sidebars/StudentSidebar";
import Dashboard from "./Dashboard";
import Academic from "./AcademicRecord";
import FeeManagement from "./FeeManagement";

import Login from "../Authentication/Login";

const Student = () => {
    return(
        <div style={{ display: "flex", height: "100vh", overflow: "hidden",gap:"2px" }}>
            {/* Sidebar */}
            <div style={{ flexShrink: 0 }}>
                <StudentSidebar/>
            </div>
            
            {/* Main Content Area */}
            <div style={{ 
                flex: 1, 
                overflowY: "auto",
                padding: "0px 0rem",
                backgroundColor: "#f8fafc",
                minHeight: "100vh"
            }}>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/AcademicRecord" element={<Academic/>}/>
                    <Route path="/FeeManagement" element={<FeeManagement/>}/>
                    
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Student;