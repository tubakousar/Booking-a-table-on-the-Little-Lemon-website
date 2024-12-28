import React from 'react';
import { Navigate } from 'react-router-dom';


function Protectedroute({children , allowedRoles}) {
    const logindata = JSON.parse(localStorage.getItem("login"))

    if(!logindata || !allowedRoles.includes(logindata.role)){
        return <Navigate to="/" replace/>
    }
    return children



}

export default Protectedroute;
