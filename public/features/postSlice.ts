import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define post schema
export interface Post {
  id: string;
  name: string;
  email: string;
  post: string;
  timeStamp: string;
  image?: string;
  profilePic?: string;
}

// Define a type for the slice state
interface PostState {
  value: Post[];
}

// Define the initial state using that type
const initialState: PostState = {
  value: []
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action: PayloadAction<Post[]>) => {
      state.value = [];
      state.value.push(...action.payload);
    }
  }
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
