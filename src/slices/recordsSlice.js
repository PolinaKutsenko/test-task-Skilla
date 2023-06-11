import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../const/routes.js';


export const fetchRecord = createAsyncThunk('records/fetchRecord', async (header) => {
  const result = await axios.post(routes.getRecordPath(), { headers: header });
  return result.data;
});

const recordsAdapter = createEntityAdapter();
const initialState = recordsAdapter.getInitialState();

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: recordsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecord.fulfilled, (state, action) => {
        recordsAdapter.addOne(state, action.payload);
      });
  },
});

export default recordsSlice.reducer;
export const { actions } = recordsSlice;
export const selectors = recordsAdapter.getSelectors((state) => state.records);
