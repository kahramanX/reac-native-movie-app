import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "actionSlice",
  initialState: {
    movieIDStore: [],
  },
  reducers: {
    setFavoriteMovieID: (state, action) => {
      state.movieIDStore.push(action.payload);
    },
  },
});

export const { setFavoriteMovieID } = actionSlice.actions;

export default actionSlice.reducer;
