import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchRecord = createAsyncThunk('records/fetchRecord', async ({ route, authHeader, partnership_id, record_id }) => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: route,
    headers: {
      ...authHeader,
      'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      'Content-Transfer-Encoding': 'binary',
      'Content-Disposition': 'filename="record.mp3"',
    },
  };

  
  const result = await axios.request(config);

  const blob = new Blob([result.data], { type: 'audio/webm;codecs=opus' })
  const src = URL.createObjectURL(blob);
  return {
    partnership_id,
    id: record_id,
    record: src
  }
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
