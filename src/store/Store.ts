import { configureStore } from '@reduxjs/toolkit';
import textSlice from './slices/text/textSlice';

const store = configureStore({
  reducer: {
    data: textSlice,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>
