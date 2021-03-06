import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import DataServiceA from '../../services/serviceAdmin';

const initialState = {admins: [], status: 'idle', error: null,}
export const retrieveAdmins = createAsyncThunk(
  "admins/retrieve",
  async () => {
    const res = await DataServiceA.getAll();
    return res.data;
  }
);
export const createAdmin = createAsyncThunk(
  "admins/create",
  async ({ admin }) => {
    const res = await DataServiceA.create({ admin });
    return res.data;
  }
);
export const getAdmin = createAsyncThunk(
  "admin/retrieve",
  async () => {
    const res = await DataServiceA.get();
    //console.log(res.data)
    return res.data;
  }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {

    },

    extraReducers(builder) {
      builder
      .addCase(retrieveAdmins.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(retrieveAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.admins = state.admins.concat(action.payload)
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.admins.push(action.payload)
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.admins = action.payload
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.status = 'failed'
        //state.admins.push(action.payload)
      })
    }
});

export default adminSlice.reducer