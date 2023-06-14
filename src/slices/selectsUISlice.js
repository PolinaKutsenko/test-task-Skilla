import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  isAllSelectorsDefault: true,
  callsSelect: 'Все звонки',
  employeesSelect: 'Все сотрудники',
  mistakesSelect: 'Все ошибки',
  ratingsSelect: 'Все оценки',
  sourcesSelect: 'Все источники',
  typesSelect: 'Все типы',
  dateSelect: '3 дня',
};

const defaultSelectorsState = {
  callsSelect: 'Все звонки',
  employeesSelect: 'Все сотрудники',
  mistakesSelect: 'Все ошибки',
  ratingsSelect: 'Все оценки',
  sourcesSelect: 'Все источники',
  typesSelect: 'Все типы',
  dateSelect: '3 дня',
};

const selectsUISlice = createSlice({
  name: 'selectsUI',
  initialState,
  reducers: {
    changeSelectorsDefaultState: (state) => {
      const { isAllSelectorsDefault, ...currentState } = state;

      if (_.isEqual(defaultSelectorsState, currentState)) {
        state.isAllSelectorsDefault = true;
      } else {
        state.isAllSelectorsDefault = false;
      }
    },
    changeSelectorsToDefault: (state) => {
        state.isAllSelectorsDefault = true;
        state.callsSelect = 'Все звонки';
        state.employeesSelect = 'Все сотрудники';
        state.mistakesSelect = 'Все ошибки';
        state.ratingsSelect = 'Все оценки';
        state.sourcesSelect = 'Все источники';
        state.typesSelect = 'Все типы';
        state.dateSelect = '3 дня';
    },
    changeCallsSelect: (state, action) => {
      state.callsSelect = action.payload;
    },
    changeEmployeesSelect: (state, action) => {
      state.employeesSelect = action.payload;
    },
    changeMistakesSelect: (state, action) => {
      state.mistakesSelect = action.payload;
    },
    changeRatingsSelect: (state, action) => {
      state.ratingsSelect = action.payload;
    },
    changeSourcesSelect: (state, action) => {
      state.sourcesSelect = action.payload;
    },
    changeTypesSelect: (state, action) => {
      state.typesSelect = action.payload;
    },
    changeDateSelect: (state, action) => {
      console.log('**', action.payload)
      state.dateSelect = action.payload;
    },
  },
});

export default selectsUISlice.reducer;
export const { 
  changeSelectorsDefaultState,
  changeSelectorsToDefault,
  changeCallsSelect,
  changeEmployeesSelect,
  changeMistakesSelect,
  changeRatingsSelect,
  changeSourcesSelect,
  changeTypesSelect,
  changeDateSelect,
} = selectsUISlice.actions;
