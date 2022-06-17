/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Characters } from '../types/characters';
import { getCharacters } from '../api';

interface StateType {
  characters: Characters[],
  status: string | null;
  errorCharacters: boolean;
}

const initialState: StateType = {
  characters: [],
  status: null,
  errorCharacters: false,
};

export const axiosCharacters = createAsyncThunk<Characters[], number>(
  'characters/axiosCharacters',
  getCharacters,
);

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosCharacters.pending, (state) => {
        state.status = 'pending';
        state.errorCharacters = false;
      })
      .addCase(axiosCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.status = 'resolved';
      })
      .addCase(axiosCharacters.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

// export const {} = CharactersSlice.actions;

export default CharactersSlice.reducer;
