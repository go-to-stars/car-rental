import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./cars/carsSlice";

const persistedCarsConfig = {
  key: "cars_rental",
  storage,
}; 

const persistedCarsReducer = persistReducer(persistedCarsConfig, carsReducer); 

export const store = configureStore({
  reducer: {
    cars_rental: persistedCarsReducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
}); 

export const persistor = persistStore(store);
