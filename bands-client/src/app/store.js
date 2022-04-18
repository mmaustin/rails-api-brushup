import { configureStore } from '@reduxjs/toolkit';
import bandsSlice from '../features/bands/bandsSlice';
import playersSlice from '../features/players/playersSlice';

export const store = configureStore({
  reducer: {
    displayBands: bandsSlice,
    displayPlayers: playersSlice
  },
});

export default store
