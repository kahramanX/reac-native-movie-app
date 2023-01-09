import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

function _removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const actionSlice = createSlice({
  name: "actionSlice",
  initialState: {
    movieIDStore: [],
  },
  reducers: {
    setFavoriteMovieID: (state, action) => {
      state.movieIDStore.push(action.payload);
    },
    removeFavoriteMovieID: (state, action) => {
      state.movieIDStore = _removeItemOnce(state.movieIDStore, action.payload);

      Alert.alert("Sucessfull", `Movie Deleted!`, [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          },
        },
      ]);
    },
  },
});

export const { setFavoriteMovieID, removeFavoriteMovieID } =
  actionSlice.actions;

export default actionSlice.reducer;
