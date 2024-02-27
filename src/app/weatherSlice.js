import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({ cityName, date1, date2 }, { rejectWithValue }) => {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/${date1}/${date2}?unitGroup=metric&include=days&key=JKDTUQ5SKSBFLPEHHFHF4CYDH&contentType=json`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);

const weatherSlice = createSlice({

    name: 'weather',
    initialState: {
      data: null,
      status: 'idle',
      error: null
    },

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });
  
  export default weatherSlice.reducer;