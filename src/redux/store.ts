import { configureStore } from "@reduxjs/toolkit";
import SchemeSlice from "./SchemeSlice";
import TableSlice from "./TableSlice";

export const store = configureStore({
  reducer: {
    scheme: SchemeSlice,
    table: TableSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
