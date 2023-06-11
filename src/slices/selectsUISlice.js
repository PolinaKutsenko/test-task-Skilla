import { createSlice } from '@reduxjs/toolkit';

const recordsAdapter = createEntityAdapter();
const initialState = recordsAdapter.getInitialState();

const selectsUISlice = createSlice({
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

export default selectsUISlice.reducer;
export const { actions } = selectsUISlice;
export const selectors = recordsAdapter.getSelectors((state) => state.records);
