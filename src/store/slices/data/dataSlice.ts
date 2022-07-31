import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataState } from './dataSlice.types';

const initialState: IDataState = {
  text: '',
  error: '',
  typed: 'ninja!',
  nextChar: '',
  score: {
    bingo: 0,
    wrong: 0,
    accuracy: 100,
    charsPerMin: 0,
  },
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
    setNextCharacter: (state: IDataState, action: PayloadAction<string>) => {
      state.nextChar = action.payload;
    },
    setCharPerMin: (state: IDataState, action: PayloadAction<number>) => {
      state.score.charsPerMin = action.payload;
    },
    setAccuracy: (state: IDataState, action: PayloadAction<number>) => {
      state.score.accuracy = action.payload;
    },
    updateTextAfterType: (state: IDataState) => {
      state.text = state.text.slice(1);
    },
    updateTypedText: (state: IDataState, action: PayloadAction<string>) => {
      state.typed += action.payload;
    },
    bingo: (state: IDataState) => {
      state.score.bingo += 1;
    },
    wrong: (state: IDataState) => {
      state.score.wrong += 1;
    },
  },
});

export default textSlice.reducer;
export const {
  setText,
  setError,
  setNextCharacter,
  setCharPerMin,
  setAccuracy,
  updateTextAfterType,
  updateTypedText,
  bingo,
  wrong,
} = textSlice.actions;
