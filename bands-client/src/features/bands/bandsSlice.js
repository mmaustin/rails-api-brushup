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
    console.log(res)
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
  async ({ id, band }) => {
    const res = await DataService.update(id, band);
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
        state.bands.push(action.payload)
      })
      .addCase(getBand.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getBand.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.bands = [action.payload]
      })
      .addCase(updateBand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedState = state.bands.map(band => {
          if (band.id === action.payload.id){
            band.name = action.payload.name;
            return band;
          } else {
            return band;
          }
        });
        //state.bands = [action.payload]
        state.bands = updatedState;
      })
      .addCase(deleteBand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newState = state.bands.filter(band => band.id !== action.payload.id);
        state.bands = newState;
      })
    }
})

export const selectAllBands = (state) => state.displayBands.bands;

export const getBandById = (state, bandId) => 
  state.displayBands.bands.find(band => band.id === bandId)


export default bandsSlice.reducer