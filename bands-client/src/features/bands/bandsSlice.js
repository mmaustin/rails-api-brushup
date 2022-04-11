import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"; //nanoid
import DataService from '../services/service'

const initialState = []
export const retrieveBands = createAsyncThunk(
    "tutorials/retrieve",
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

export default bandsSlice.reducer