import { Button } from 'antd';
import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
    const navigate = useNavigate()
    // const isauthenticated = useSelector(state=>state.login.isauthenticated)

    // useEffect( ()=>{
    //     const logindata = JSON.parse(localStorage.getItem("login"));
    //     if(logindata){
    //         if(logindata.role === "admin"){
    //             navigate("/homepage")
    //         }else if(logindata.role === "customer"){
    //             navigate("/customerhome")
    //         }else if(logindata.role === "supplier"){
    //             navigate("/supplierhome")
    //         }
    //     }else if(isauthenticated){
    //         if(isauthenticated.role === "admin"){
    //             navigate("/homepage")
    //         }else if(isauthenticated.role === "customer"){
    //             navigate("/customerhome")
    //         }else if(isauthenticated.role === "supplier"){
    //             navigate("/supplierhome")
    //         }

    //     }
    // },[navigate])

    const handlesignuppage=()=>{
        navigate('/signuppage' )
    }
    // const handlecustomer =()=>{
    //   navigate("/suppliersignuppage")
    // }
    const handleloginpage =()=>{
        navigate('/loginpage')
    }
  return (
    <div>
      <h2>Landing page</h2>
      {/* <br /> */}
      <Button onClick={handlesignuppage}>Signup</Button>
      {/* <Button onClick={handlecustomer}>Signup customer</Button> */}
      <Button onClick={handleloginpage}>Login</Button>
    </div>
  );
}

export default Landingpage;
