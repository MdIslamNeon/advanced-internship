import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';

// 1. Configure the global Redux store
export const store = configureStore({
  reducer: {
    modal: modalReducer, // Registers your modalSlice under state.modal
  },
});

// 2. Export TypeScript types inferred directly from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;