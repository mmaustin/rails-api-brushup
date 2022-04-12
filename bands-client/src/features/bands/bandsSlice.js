import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataService from '../../services/service'


const initialState = {bands: [], status: 'idle', error: null,}
export const retrieveBands = createAsyncThunk(
    "bands/retrieve",
    async () => {
      const res = await DataService.getAll();
      //console.log(res.data)
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
        .addCase(retrieveBands.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.bands = state.bands.concat(action.payload)
        })
    }
})

export const selectAllBands = (state) => state.displayBands.bands

export default bandsSlice.reducer