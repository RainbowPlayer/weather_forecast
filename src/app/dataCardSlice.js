import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/cards');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const cards = await response.json();
      return cards;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'cards/addCard',
  async (newCard, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const card = await response.json();
      return card;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
      items: [],
      status: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCards.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCards.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchCards.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(addCard.fulfilled, (state, action) => {
          state.items.push(action.payload);
        });
    },
});
  
export default cardsSlice.reducer;