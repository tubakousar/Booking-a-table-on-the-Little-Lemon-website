import { configureStore } from "@reduxjs/toolkit";

import loginslicereducer from "./LoginSlice";
import customerSlicereducer from "./CustomerSlice"
import supplierSlicereducer from "./SupplierSlice"
export const store = configureStore({
    reducer:{
        login:loginslicereducer,
        customer: customerSlicereducer,
        supplier: supplierSlicereducer,

    }
})