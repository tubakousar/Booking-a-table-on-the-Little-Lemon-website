import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerData: JSON.parse(localStorage.getItem("customerdata")) || [],
    isAuthenticated: false,
    currentCustomer: null,
  },
  reducers: {
    signupCustomer: (state, action) => {
      state.customerData.push(action.payload);
      localStorage.setItem("customerdata", JSON.stringify(state.customerData));
    },
    loginCustomer: (state, action) => {
      const { email, password } = action.payload;
      const existingCustomer = state.customerData.find(
        (user) => user.email === email && user.password === password
      );
      if (existingCustomer) {
        state.currentCustomer = existingCustomer;
        state.isAuthenticated = true;
        localStorage.setItem(
          "login",
          JSON.stringify({ email: existingCustomer.email, role: "customer" })
        );
      } else {
        console.error("Invalid email or password");
      }
    },
    logoutCustomer: (state) => {
      state.isAuthenticated = false;
      state.currentCustomer = null;
      localStorage.removeItem("login");
      localStorage.removeItem("customerdata");
    },
  },
});

export const { signupCustomer, loginCustomer, logoutCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
