/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      localStorage.setItem('user', JSON.stringify(state));
    },
    resetUser: (state, action) => {
      state.name = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
