import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/features/todoSlice";
import { todoApi } from "./API/api";

export const store = configureStore({
  reducer: { todos: todoReducer, [todoApi.reducerPath]: todoApi.reducer },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(todoApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
