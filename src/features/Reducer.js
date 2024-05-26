import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(process.env.REACT_APP_MOVIES_URL);
  return response.data;
});


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    favorites: [],
    showFavorite: false,
    status: 'idle', 
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const itemId = action.payload;
      const isFavorite = state.favorites.includes(itemId);
      if (isFavorite) {
        state.favorites = state.favorites.filter(id => id !== itemId);
      } else {
        state.favorites.push(itemId);
      }
    },
    toggleShowFavorite: (state, action) => {
      state.showFavorite = action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.sort((a, b) => b.rating - a.rating);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleFavorite, toggleShowFavorite } = dataSlice.actions;
export default dataSlice.reducer;
