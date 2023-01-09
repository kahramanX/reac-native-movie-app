import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "action",
  initialState: {
    movieID: [],
  },
  reducers: {
    setFavoriteMovie: (state, action) => {
      state.movieID = action.payload;
    },
  },
});

export const { setFavoriteMovie } = actionSlice.actions;

export default actionSlice.reducer;
