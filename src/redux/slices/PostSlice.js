import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch users
export const fetchpost = createAsyncThunk("post/fetchpost", async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  console.log('posts response',response)
  return response.data.posts; // Extract users array
});

const PostSlice = createSlice({
  name: "post",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No regular reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchpost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchpost.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchpost.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch post";
      });
  },
});

// ✅ Export the reducer as default
export default PostSlice.reducer;
