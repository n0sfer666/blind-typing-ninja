import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatesState } from './statesSlice.types';

const initialState: IStatesState = {
  loading: true,
  preparing: true,
};

const statesSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    setLoading: (state: IStatesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPreparing: (state: IStatesState, action: PayloadAction<boolean>) => {
      state.preparing = action.payload;
    },
  },
});

export default statesSlice.reducer;
export const { setLoading, setPreparing } = statesSlice.actions;
