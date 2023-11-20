import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6555483963cafc694fe79ec3.mockapi.io"; // глобальні значення за замовчуванням для axios які будуть застосовані до кожного запиту (з мого аккаунту)

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/adverts"); // запит списку контактів
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція fetchContacts очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів)

export const getCarsByID = createAsyncThunk(
  "cars/getCarsByID",
  async (Id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/adverts/${Id}`); // запит списку контактів
      console.log("by id response: ", response);
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
);
