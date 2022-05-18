import { configureStore } from '@reduxjs/toolkit';
import bandsSlice from '../features/bands/bandsSlice';
import playersSlice from '../features/players/playersSlice';
import adminSlice from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    displayBands: bandsSlice,
    displayPlayers: playersSlice,
    admin: adminSlice
  },
});

export default store
