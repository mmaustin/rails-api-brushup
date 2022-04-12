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

    }
})

export const selectAllBands = (state) => state.displayBands.bands

export default bandsSlice.reducer