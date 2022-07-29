import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataState } from './dataSlice.types';

const initialState: IDataState = {
  text: '',
  error: '',
  typed: 'ninja!',
  nextChar: '',
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
    setNextChar: (state: IDataState, action: PayloadAction<string>) => {
      state.nextChar = action.payload;
    },
    updateTextAfterType: (state: IDataState) => {
      state.text = state.text.slice(1);
    },
    updateTypedText: (state: IDataState, action: PayloadAction<string>) => {
      state.typed += action.payload;
    },
  },
});

export default textSlice.reducer;
export const { setText, setError, updateTypedText } = textSlice.actions;
