import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './callsSlice.js';
import recordsReducer from './recordsSlice.js';

export default configureStore({
  reducer: {
    calls: callsReducer,
    records: recordsReducer,
  },
});
