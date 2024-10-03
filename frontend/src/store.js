import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import dealsReducer from "./features/deals/dealsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    deals: dealsReducer,
  },
});

export default store;
