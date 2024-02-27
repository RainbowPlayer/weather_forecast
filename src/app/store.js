import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import dataCardReducer from "./dataCardSlice"
import todayWeatherReducer from "./weatherTodaySlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        dataCard: dataCardReducer,
        todayWeather: todayWeatherReducer
    }
})