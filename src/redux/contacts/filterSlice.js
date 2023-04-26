import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilters: {
      reducer: (state, action) => {
        state.inputValue = action.payload;
      },
      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
    
  },
});

export const { setFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;