import { createSlice } from "@reduxjs/toolkit";


export const loginslice = createSlice({
    name:"login",
    initialState:{
        admin:JSON.parse(localStorage.getItem("admindata")) ||[],
        isauthenticated : false,
        currentadmin:null

    },
    reducers:{
        signupadmin:(state,action)=>{
            state.admin.push(action.payload);
            localStorage.setItem("admindata" ,JSON.stringify(state.admin))



        },
        loginadmin:(state , action)=>{
            const {email,password} = action.payload;
            const existadmin = state.admin.find(user=>user.email === email && user.password === password)
            if(existadmin){
                state.currentadmin  = existadmin;
                state.isauthenticated = true
               
                localStorage.setItem("login", JSON.stringify({email :existadmin.email ,  role: "admin"}));
            }
            else{
                console.error("invalid email orrr password")
            }

        },
        logoutadmin:(state ,action)=>{
            state.isauthenticated = false;
            state.currentadmin = null;
            localStorage.removeItem("admindata")
            localStorage.removeItem("login")

        },
       

    }
})
export const {adminadd ,loginadmin, logoutadmin,signupadmin
} = loginslice.actions;
export default loginslice.reducer;


