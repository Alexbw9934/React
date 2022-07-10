import { createSlice } from '@reduxjs/toolkit';

export const testReducer = createSlice({
    name: 'test',
    initialState: {
        AAA: null,
    },
    reducers: {
        setAAA: (state, val) => {
            state.AAA = val
        }
    }
})

export default testReducer.reducer;
