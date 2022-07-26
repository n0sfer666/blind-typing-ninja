import { configureStore } from '@reduxjs/toolkit';
import textSlice from './slices/data/dataSlice';
import statesSlice from './slices/states/statesSlice';

const store = configureStore({
  reducer: {
    data: textSlice,
    states: statesSlice,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>
