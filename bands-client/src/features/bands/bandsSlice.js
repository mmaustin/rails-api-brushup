import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{id: nanoid(), band: "Horace Silver Quintet"}]

const bandsSlice = createSlice({
    name: 'displayBands',
    initialState,
    reducers: {

    }
})

export default bandsSlice.reducer