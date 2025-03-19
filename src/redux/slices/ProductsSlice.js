import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch users
export const fetchproducts = createAsyncThunk("products/fetchproducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  console.log('response',response)
  return response.data.products; // Extract users array
});

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No regular reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchproducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

// ✅ Export the reducer as default
export default ProductsSlice.reducer;
