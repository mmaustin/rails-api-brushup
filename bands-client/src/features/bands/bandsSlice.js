import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataService from '../../services/service'


const initialState = {bands: [], status: 'idle', error: null,}
export const retrieveBands = createAsyncThunk(
  "bands/retrieve",
  async () => {
    const res = await DataService.getAll();
    return res.data;
  }
);
export const createBand = createAsyncThunk(
  "bands/create",
  async ({ name }) => {
    const res = await DataService.create({ name });
    return res.data;
  }
);

const bandsSlice = createSlice({
    name: 'displayBands',
    initialState,
    reducers: {

    },

    extraReducers(builder) {
      builder
      .addCase(retrieveBands.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(retrieveBands.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.bands = state.bands.concat(action.payload)
      })
      .addCase(createBand.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.bands = state.bands.concat(action.payload)
      })
    }
})

export const selectAllBands = (state) => state.displayBands.bands

export default bandsSlice.reducer