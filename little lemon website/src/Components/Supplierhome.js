import React from 'react';
import {Button} from "antd"
// import {logoutSupplier} from "../reduxtoolkit/SupplierSlice"
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Supplierhome() {
  //  const dispatch =  useDispatch()
   const navigate = useNavigate();
//    const isauthenticated =  useSelector(state => state.login.isauthenticated)

//    useEffect(() => {
//     const logindata = JSON.parse(localStorage.getItem("login"));
//     if (!logindata ||!isauthenticated) {
//         navigate("/signuppage");
//     }
// }, [navigate ,isauthenticated]);

    const logout = ()=>{
        localStorage.removeItem("login")
        // dispatch(logoutSupplier())
        navigate("/")
    }
  return (
    <div>
      supplier home
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default Supplierhome;








// import React from 'react';

// function Supplierhome() {
//   return (
//     <div>
//       Supplier page
//     </div>
//   );
// }

// export default Supplierhome;
