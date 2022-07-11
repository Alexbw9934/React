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

const { setAAA } = testReducer.actions;

export default testReducer.reducer;
