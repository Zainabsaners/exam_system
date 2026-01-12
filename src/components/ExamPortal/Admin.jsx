import React from "react"
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../sidebars/AdminSidebar";

import Timetable from "./Timetable";

import Login from "../Authentication/Login";

const Admin  = () => {
    return(
        <div style={{display: "flex" }}>
            <AdminSidebar/>
            <div style={{flexGrow: 1 , padding: "20px"}}>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Timetable" element={<Timetable/>}/>
                    
                </Routes>
            </div>
        </div>
    );
};
 export default Admin;