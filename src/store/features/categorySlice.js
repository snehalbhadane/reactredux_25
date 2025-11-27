import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../component/services/Api";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async () => {
    const response = await api.get("/categories/all");  
    return response.data.data;
  }
);

const initialState = {
  categories: [],
  errorMessage: null,
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.errorMessage = null;  
        state.isLoading=false     
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.errorMessage = action.error.message;  
        state.isLoading=false;    
      })    
  },
});

export default categorySlice.reducer;
