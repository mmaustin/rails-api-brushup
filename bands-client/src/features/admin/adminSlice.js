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