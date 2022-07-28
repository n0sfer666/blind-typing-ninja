import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITextState } from './dataSlice.types';

const initialState: ITextState = {
  text: '',
  error: '',
  typedText: 'some text ',
};

const textSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setText: (state: ITextState, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setError: (state: ITextState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    updateTypedText: (state: ITextState, action: PayloadAction<string>) => {
      state.typedText += action.payload;
    },
  },
});

export default textSlice.reducer;
export const { setText, setError, updateTypedText } = textSlice.actions;
