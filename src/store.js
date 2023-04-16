import { configureStore } from "@reduxjs/toolkit";
import { BookingTicketReducer } from "./reducers/BookingTicketReducer";

const store = configureStore({
    reducer:{
        BookingTicketReducer
    }
})

export default store;