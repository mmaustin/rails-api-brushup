import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataServiceP from '../../services/servicePlayers'

const initialState = {players: [], status: 'idle', error: null}
export const retrievePlayers = createAsyncThunk(
  "players/retrieve",
  async () => {
    const res = await DataServiceP.getAll();
    return res.data;
  }
);
export const createPlayer = createAsyncThunk(
    "players/create",
    async ({ name, instrument, band_id }) => {
      const res = await DataServiceP.create({ name, instrument, band_id });
      return res.data;
    }
  );

  const playersSlice = createSlice({
    name: 'displayPlayers',
    initialState,
    reducers: {

    },

    extraReducers(builder) {
      builder
      .addCase(retrievePlayers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(retrievePlayers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.players = state.players.concat(action.payload)
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.players = state.players.concat(action.payload)
      })
    }
})

export default playersSlice.reducer