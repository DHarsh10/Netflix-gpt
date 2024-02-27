import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload
    },

    removeUser: (state, action) => {
      return null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
