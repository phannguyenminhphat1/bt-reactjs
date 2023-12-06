import { configureStore } from "@reduxjs/toolkit";
import { busTicketReducer } from "./reducers/busTicketReducer";

const store = configureStore({
  reducer: {
    busTicketReducer,
  },
});

export default store;
