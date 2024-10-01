import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

// Create a slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

// Export the reducer
export default postsSlice.reducer;
