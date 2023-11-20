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
}; // конфігурація persist-редюсера (назва ключа у localstorage (key) та сховище (storage))

const persistedCarsReducer = persistReducer(persistedCarsConfig, carsReducer); // persist-редюсер

export const store = configureStore({
  reducer: {
    cars_rental: persistedCarsReducer,
  }, // імена функцій редюсерів, що зберігають стани у сховищі Redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // проміжна вставка (до редюсера) для ігнорування дій (ignoredActions), що викликають помилки (на старті програми, поки не вичитані дані або вони відсутні і т.ін)
}); // абстракція над стандартною createStore функцією Redux, яка додає параметри за замовчуванням до налаштувань сховища для кращого досвіду розробки

export const persistor = persistStore(store); // посилання для persistor-сховища localhost на оригінальне сховище Redux
