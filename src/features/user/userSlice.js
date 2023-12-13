import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: null,
    password: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfileName: (state, action) => {
      state.profile = action.payload;
    },

    updateOnlyName: (state, action) => {
      state.profile.name = action.payload;
    },
  },
});

// exports actions
export const { updateProfileName, updateOnlyName } = userSlice.actions;

export default userSlice.reducer;
