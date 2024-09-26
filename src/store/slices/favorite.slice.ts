import { Film } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  [key: string]: Film;
}

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {} as FavoriteState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Film>) => {
      const id = action.payload.id.toString();
      if (id in state) {
        delete state[id];
      } else {
        state[id] = action.payload;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
