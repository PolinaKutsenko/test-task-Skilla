import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './callsSlice.js';
import recordsReducer from './recordsSlice.js';
import selectsUIReducer from './selectsUISlice.js';

export default configureStore({
  reducer: {
    calls: callsReducer,
    records: recordsReducer,
    selectsUI: selectsUIReducer,
  },
});
