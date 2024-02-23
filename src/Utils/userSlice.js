import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, actions) => {
        state.user = actions.payload
        console.log(state.user)
    },

    removeUser: (state, actions) => {
        // state.user = actions.payload
        // console.log(state.user)
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
