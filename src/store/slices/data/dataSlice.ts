import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataState } from './dataSlice.types';

const initialState: IDataState = {
  text: '',
  error: '',
  typed: 'ninja!',
};

const textSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setText: (state: IDataState, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setError: (state: IDataState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    updateTypedText: (state: IDataState, action: PayloadAction<string>) => {
      state.typed += action.payload;
    },
  },
});

export default textSlice.reducer;
export const { setText, setError, updateTypedText } = textSlice.actions;
