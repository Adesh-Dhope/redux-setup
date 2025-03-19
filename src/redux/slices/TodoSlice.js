import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch users
export const fetchtodo = createAsyncThunk("todo/fetchtodo", async () => {
  const response = await axios.get("https://dummyjson.com/todos");
  console.log('todos response',response)
  return response.data.todos; // Extract users array
});

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No regular reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchtodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchtodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchtodo.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch todos";
      });
  },
});

// ✅ Export the reducer as default
export default TodoSlice.reducer;
