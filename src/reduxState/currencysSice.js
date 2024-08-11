import { createSlice } from '@reduxjs/toolkit';
import { getBaseCurrency } from './operations';

export const currencySlice = createSlice({
  initialState: { baseCurrency: '' },
  name: 'currency',
  reducers: {
    setDefaultCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export const selectBaseCurrency = state => state.currency.baseCurrency;
