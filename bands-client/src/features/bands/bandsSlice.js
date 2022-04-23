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
export const getBand = createAsyncThunk(
  "band/retrieve",
  async ({id}) => {
    const res = await DataService.get(id);
    return res.data;
  }
);
export const deleteBand = createAsyncThunk(
  "band/delete",
  async ({ id }) => {
    await DataService.delete(id);
    return { id };
  }
);
export const updateBand = createAsyncThunk(
  "band/update",
  async ({ id, data }) => {
    const res = await DataService.update(id, data);
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
      .addCase(getBand.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getBand.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.bands = [action.payload]
      })
    }
})

export const selectAllBands = (state) => state.displayBands.bands

export default bandsSlice.reducer