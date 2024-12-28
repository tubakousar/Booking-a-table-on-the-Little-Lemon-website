import React from 'react';
import {Button} from "antd"
// import {logoutCustomer} from "../reduxtoolkit/CustomerSlice"
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Customerhome() {
  //  const dispatch =  useDispatch()
   const navigate = useNavigate();
//    const isauthenticated =  useSelector(state => state.login.isauthenticated)

//    useEffect(() => {
//     const logindata = JSON.parse(localStorage.getItem("login"));
//     if (!logindata || !isauthenticated) {
//         navigate("/signuppage");
//     }
// }, [navigate ,isauthenticated]);

    const customerlogoutpage = ()=>{
        localStorage.removeItem("login")
        // dispatch(logoutCustomer())
        navigate("/")
    }
  return (
    <div>
      customer home
      <Button onClick={customerlogoutpage}>Logout</Button>
    </div>
  );
}

export default Customerhome;
