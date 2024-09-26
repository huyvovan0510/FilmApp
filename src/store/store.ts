import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favorite.slice";
import bookingReducer from "./slices/booking.slice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
