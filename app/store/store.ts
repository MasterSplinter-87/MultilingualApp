import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer, // Add your slices here
  },
});

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
