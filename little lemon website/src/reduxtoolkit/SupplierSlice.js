import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    supplierData: JSON.parse(localStorage.getItem("supplierdata")) || [],
    isAuthenticated: false,
    currentSupplier: null,
  },
  reducers: {
    signupSupplier: (state, action) => {
      state.supplierData.push(action.payload);
      localStorage.setItem("supplierdata", JSON.stringify(state.supplierData));
    },
    loginSupplier: (state, action) => {
        
      const { email, password } = action.payload;
      const existingSupplier = state.supplierData.find(
        (user) => user.email === email && user.password === password
      );
      if (existingSupplier) {
        state.currentSupplier = existingSupplier;
        state.isAuthenticated = true;
        localStorage.setItem(
          "login",
          JSON.stringify({ email: existingSupplier.email, role: "supplier" })
        );
      } else {
        console.error("Invalid email or password");
      }
    },
    logoutSupplier: (state) => {
      state.isAuthenticated = false;
      state.currentSupplier = null;
      localStorage.removeItem("login");
      localStorage.removeItem("supplierdata");
    },
  },
});

export const { signupSupplier, loginSupplier, logoutSupplier } =
  supplierSlice.actions;
export default supplierSlice.reducer;
