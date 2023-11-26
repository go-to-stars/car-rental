import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6555483963cafc694fe79ec3.mockapi.io"; // глобальні значення за замовчуванням для axios які будуть застосовані до кожного запиту (з мого аккаунту)

export const getCars = createAsyncThunk(
  "cars_rental/getCars",
  async (page, { rejectWithValue }) => {
    const url = `/adverts?page=${page}&limit=12`;
    
    try {
      const response = await axios.get(url);      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
