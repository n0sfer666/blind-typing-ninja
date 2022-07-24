import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITextState } from './textSlice.types';

const initialState: ITextState = {
  text: '',
};

const textSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    update: (state: ITextState, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export default textSlice.reducer;
export const { update } = textSlice.actions;
