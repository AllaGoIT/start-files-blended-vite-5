import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkAPI) => {
    const state = thunkAPI.getState();
    const currency = state.currency.baseCurrency;
    if (currency) {
      return thunkAPI.rejectWithValue(null);
    }
    try {
      const data = await getUserInfo(crd);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
