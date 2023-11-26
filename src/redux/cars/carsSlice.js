import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./carsOperations";

const carsSlice = createSlice({
  name: "cars_rental",
  initialState: {
    items: [],    
    isLoading: false,
    error: null,
    isFavorites: [],
    page: 1,
  }, 
  reducers: {
    addToFavorites(state, action) {      
      state.isFavorites.push(action.payload.id);
    },
    deleteFavorites(state, action) {
      state.isFavorites.splice(
        state.isFavorites.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
    setPopUpWindow(state, action) {
      state.isPopUpWindow = action.payload.id;
    },
    closePopUpWindow(state, action) {
      state.isPopUpWindow = null;
    },
    showPopUpWindow(state) {
      state.showPopUpWindow = true;
    },
    hidePopUpWindow(state) {
      state.showPopUpWindow = false;
    },
    changePage(state, action) {
      state.page = action.payload;
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
        state.items.splice((state.page - 1) * 12, 12, ...action.payload);
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setPopUpWindow,
  closePopUpWindow,
  showPopUpWindow,
  hidePopUpWindow,
  addToFavorites,
  deleteFavorites,
  changePage,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
