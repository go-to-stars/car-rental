export const selectCars = (state) => state.cars_rental.items; // експорт функції селектору selectContacts, що повертає список контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectIsLoading = (state) => state.cars_rental.isLoading; // експорт функції селектору selectIsLoading, що повертає поточний стан завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectError = (state) => state.cars_rental.error; // експорт функції селектору selectError, що повертає повідомлення значення об'єкта помилки завантаження контактів зі стану сховища Redux (за допомогою виклика хука useSelector)

export const selectIsFavorites = (state) => state.cars_rental.isFavorites;

export const selectShowPopUpWindow = (state) => state.cars_rental.showPopUpWindow;

export const selectIsPopUpWindow = (state) => state.cars_rental.isPopUpWindow;
