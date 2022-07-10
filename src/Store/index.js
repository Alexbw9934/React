import { configureStore } from '@reduxjs/toolkit';
import testReducer from './testReducer';

const Store = configureStore({
    reducer: {
        test: testReducer,
    }
})

export default Store;