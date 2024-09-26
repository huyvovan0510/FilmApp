import { Film } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  bookedFilms: { [id: string]: Film };
}

const initialState: BookingState = {
  bookedFilms: {},
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookingFilm: (state, action: PayloadAction<Film>) => {
      const film = action.payload;
      state.bookedFilms[film.id] = film;
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      const filmId = action.payload;
      delete state.bookedFilms[filmId];
    },
    clearAllBookings: (state) => {
      state.bookedFilms = {};
    },
  },
});

export const { bookingFilm, removeBooking, clearAllBookings } =
  bookingSlice.actions;
export default bookingSlice.reducer;
