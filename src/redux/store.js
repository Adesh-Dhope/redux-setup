import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/UserSlice"; // ✅ Use default import
import productsReducer from "./slices/ProductsSlice";
import commentsReducer from "./slices/CommentSlice";
import todoReducer from "./slices/TodoSlice";
import postReducer from "./slices/PostSlice";


const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    comments: commentsReducer,
    todo: todoReducer,
    post:  postReducer,
  },
});

export default store;
