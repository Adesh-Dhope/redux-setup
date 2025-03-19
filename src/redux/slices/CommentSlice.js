import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch users
export const fetchcomments = createAsyncThunk("comments/fetchcomments", async () => {
  const response = await axios.get("https://dummyjson.com/comments");
  console.log('comments',response)
  return response.data.comments; // Extract users array
});

const CommentsSlice = createSlice({
  name: "comments",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No regular reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchcomments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcomments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchcomments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

// ✅ Export the reducer as default
export default CommentsSlice.reducer;
