/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalState: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.modalContent = action.payload.modalContent;
    },
  },
});

export const { setModalState } = modalSlice.actions;

export default modalSlice.reducer;
