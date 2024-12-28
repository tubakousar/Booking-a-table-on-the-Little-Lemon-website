import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signuppage from "./Components/Signuppage";
import Loginpage from "./Components/Loginpage";
import Homepage from "./Components/Homepage";
import Customerdetails from "./Components/Customerdetails";
import Landingpage from "./Components/Landingpage";
import Customerhome from "./Components/Customerhome";
import Supplierhome from "./Components/Supplierhome";
// import CustomerSignup from './Components/CustomerSignup';
import CustomerSignupPage from "./Components/CustomerSignupPage";
import Suppliersignuppage from "./Components/Suppliersignuppage";
import Protectedroute from "./Components/Protectedroute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />

          <Route
            path="/customersignuppage"
            element={
              <Protectedroute>
                <CustomerSignupPage />
              </Protectedroute>
            }
          />

          <Route
            path="/homepage"
            element={
              <Protectedroute allowedRoles={["admin"]}>
                <Homepage />
              </Protectedroute>
            }
          />

          {/* <Route path='/customersignuppage' element={<CustomerSignup/>}/> */}
          <Route
            path="/customerhome"
            element={
              <Protectedroute allowedRoles={["customer"]}>
                <Customerhome />
              </Protectedroute>
            }
          />
          <Route
            path="/suppliersignuppage"
            element={
              <Protectedroute>
                <Suppliersignuppage />
              </Protectedroute>
            }
          />
          <Route
            path="/supplierhome"
            element={
              <Protectedroute allowedRoles={["supplier"]}>
                <Supplierhome />
              </Protectedroute>
            }
          />
          <Route path="/customerdetails/:id" element={<Customerdetails />} />
        </Routes>
      </Router>

      {/* <Signuppage/> */}
    </div>
  );
}

export default App;
