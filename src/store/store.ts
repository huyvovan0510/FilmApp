// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {
//     favorites: favoriteReducer,
//     booking: bookingReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import favoriteReducer from "./slices/favorite.slice";
import bookingReducer from "./slices/booking.slice";

const persistConfig = {
  key: "rootStorage",
  storage: AsyncStorage,
  whitelist: ["favorites", "booking"],
};

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  booking: bookingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
