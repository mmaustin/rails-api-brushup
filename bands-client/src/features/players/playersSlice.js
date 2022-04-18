import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataServiceP from '../../services/servicePlayers'

const initialState = {players: []}
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
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.players = state.players.concat(action.payload)
      })
    }
})

export default playersSlice.reducer