import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodayWeather = createAsyncThunk(
  'weather/fetchTodayWeather',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today?unitGroup=metric&include=days&key=JKDTUQ5SKSBFLPEHHFHF4CYDH&contentType=json`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todayWeatherSlice = createSlice({
  name: 'todayWeather',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodayWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodayWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTodayWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default todayWeatherSlice.reducer;