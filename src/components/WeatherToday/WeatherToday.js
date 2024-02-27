import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWeather } from '../../app/weatherTodaySlice';
import PictureWeather from '../PictureWeather/PictureWeather';
import './style.css';

const WeatherToday = ({ cityName, date1 }) => {
    const dispatch = useDispatch();
    const { data: todayWeather, status: todayWeatherStatus } = useSelector(state => state.todayWeather);
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        if (cityName) {
            dispatch(fetchTodayWeather(cityName));
        }
    }, [cityName, dispatch]);

    useEffect(() => {
        if (date1) {
            const updateCountdown = () => {
                const now = new Date();
                const tripStart = new Date(date1);
                const difference = tripStart.getTime() - now.getTime();

                if (difference > 0) {
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                    setCountdown(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
                } else {
                    setCountdown('The trip has started!');
                }
            };

            updateCountdown();
            const intervalId = setInterval(updateCountdown, 1000);

            return () => clearInterval(intervalId);
        }
    }, [date1]);

    if (todayWeatherStatus === 'loading') {
        return <div>Loading weather...</div>;
    }

    if (!todayWeather) {
        return <div>No weather data available for {cityName}</div>;
    }

    const today = new Date();
    const options = { weekday: 'long' };
    const dayName = today.toLocaleDateString('en-US', options);

    return (
        <div className="weather-today">
             <div className="weather-today-header">
                {dayName}
            </div>
            <div className="weather-today-header">{cityName}</div>
            <PictureWeather iconName={todayWeather.days[0].icon} className="weather-today-icon" />
            <div className="weather-today-temp">{todayWeather.days[0].temp}°C</div>
            <div className="weather-today-conditions">{todayWeather.days[0].conditions}</div>
            <div className="weather-today-countdown">{countdown}</div>
        </div>
    );
};

export default WeatherToday;


