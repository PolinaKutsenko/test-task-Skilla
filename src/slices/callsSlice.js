import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../const/routes.js';


export const fetchCalls = createAsyncThunk('calls/fetchCalls', async (header) => {
  const result = await axios.post(routes.getListPath(), { headers: header });
  return result.data;
});

const callsAdapter = createEntityAdapter();
const initialState = callsAdapter.getInitialState({ loadingStatus: 'idle', error: null });

const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    addCalls: callsAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalls.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchCalls.fulfilled, (state, action) => {
        callsAdapter.addMany(state, action.payload);
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
});

export default callsSlice.reducer;
export const { actions } = callsSlice;
export const selectors = callsAdapter.getSelectors((state) => state.calls);
