export const selectCars = (state) => state.cars_rental.items; 

export const selectIsLoading = (state) => state.cars_rental.isLoading; 

export const selectError = (state) => state.cars_rental.error; 

export const selectIsFavorites = (state) => state.cars_rental.isFavorites;

export const selectShowPopUpWindow = (state) =>
  state.cars_rental.showPopUpWindow;

export const selectIsPopUpWindow = (state) => state.cars_rental.isPopUpWindow;

export const selectPage = (state) => state.cars_rental.page;
