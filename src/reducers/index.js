import { combineReducers } from "redux";

import { songs } from "../data";

const songsReducer = (state = [], action) => {
  return songs;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
