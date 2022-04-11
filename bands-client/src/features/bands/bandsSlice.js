import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataService from '../../services/service'


const initialState = {bands: []}
export const retrieveBands = createAsyncThunk(
    "bands/retrieve",
    async () => {
      const res = await DataService.getAll();
      return res.data;
    }
);


const bandsSlice = createSlice({
    name: 'displayBands',
    initialState,
    reducers: {

    }
})

export const selectAllBands = (state) => state.bands.displayBands

export default bandsSlice.reducer