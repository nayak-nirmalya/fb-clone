import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface PostState {
  value: number;
}

// Define the initial state using that type
const initialState: PostState = {
  value: 0
};

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: []
  },
  reducers: {
    addPost: (state, action: PayloadAction<number>) => {},
    addAllPost: (state, action) => {}
  }
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
