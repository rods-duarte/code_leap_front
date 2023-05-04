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
      if (action.payload.name == null) {
        return;
      }

      state.name = action.payload.name;
      localStorage.setItem('user', JSON.stringify(state));
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
