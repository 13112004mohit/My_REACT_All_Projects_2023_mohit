import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { AdminReducer } from "./reducers/admin";

const Store = configureStore({
  reducer: {
    user: userReducer,
    admin: AdminReducer,
  },
});

export default Store;
