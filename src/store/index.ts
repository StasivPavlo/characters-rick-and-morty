import { configureStore } from '@reduxjs/toolkit';
import CharactersSlice from './CharactersSlice';

const store = configureStore({
  reducer: {
    characters: CharactersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
