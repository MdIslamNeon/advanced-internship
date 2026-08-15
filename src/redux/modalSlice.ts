import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. Define a type for your slice state
interface ModalState {
  isOpen: boolean;
  modalType: string | null;
}

// 2. Provide an initial state that matches that type
const initialState: ModalState = {
  isOpen: false,
  modalType: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
