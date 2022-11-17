import { configureStore, createSlice } from "@reduxjs/toolkit";

const couleurSlice = createSlice({
  name: "couleur",
  initialState: {
    listColors: ["Black", "Red", "Blue", "Gray", "Green"],
    color: "Black",
  },
  reducers: {
    colorAction: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { colorAction } = couleurSlice.actions;

export const store = configureStore({
  reducer: {
    couleur: couleurSlice.reducer,
  },
});
