import React from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from 'antd/es/avatar/avatar';

function Customerdetails() {
   const location =  useLocation();
   const {user} = location.state || {}



  return (
    <div 
    // style={{textAlign:"center" , marginTop:"20px"}}
    >
      <h2>user detail</h2>
      <Avatar 
      style={{backgroundColor: "#87d068"}}
      size={100}>
        {user.name?.[0]?.toUpperCase()}

      </Avatar>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Email:</strong>{user.email}</p>
      <p><strong>Role:</strong>{user.role}</p>
    </div>
  );
}

export default Customerdetails;
