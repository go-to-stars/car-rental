import { createSlice } from "@reduxjs/toolkit";
import { getCars, getCarsByID } from "./carsOperations";

// const isPending = (state) => {
//   state.isLoading = true;
// }; // функція isPending, змінює значення стейту isLoading на true

// const isRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// }; // функція isRejected, змінює значення стейту isLoading на false та записує в стейт текст повідомлення об'єкта помилки

const carsSlice = createSlice({
  name: "cars_rental",
  initialState: {
    items: [],
    item: {},
    isLoading: false,
    error: null,
    isFavorites: [],
  }, // форма стану за замовчуванням
  reducers: {
    addToFavorites(state, action) {
      // state.items.findIndex((item) => item.id === action.payload.id);
      state.isFavorites.push(action.payload.id);
    },
    deleteFavorites(state, action) {
      state.isFavorites.splice(
        state.isFavorites.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
    setPopUpWindow(state, action) {
      state.showPopUpWindow = !state.showPopUpWindow;
      state.isPopUpWindow = action.payload.id;
    },
    closePopUpWindow(state, action) {
      state.showPopUpWindow = !state.showPopUpWindow;
      state.isPopUpWindow = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsByID.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(getCarsByID.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setPopUpWindow,
  closePopUpWindow,
  addToFavorites,
  deleteFavorites,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer; // експорт редюсера функції carsSlice
