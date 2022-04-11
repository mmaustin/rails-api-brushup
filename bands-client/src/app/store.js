import { configureStore } from '@reduxjs/toolkit';
import bandsSlice from '../features/bands/bandsSlice';

export const store = configureStore({
  reducer: {
    displayBands: bandsSlice
  },
});
