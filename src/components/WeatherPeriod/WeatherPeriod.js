import { useEffect, useState } from 'react';
import { fetchWeather } from '../../app/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import PictureWeather from '../PictureWeather/PictureWeather';
import './style.css'
import Button from '../Button/Button'

const WeatherPeriod = ({ cityName, date1, date2 }) => {
    const dispatch = useDispatch();
    const [slideIndex, setSlideIndex] = useState(0);

    const { data: weatherData, status } = useSelector(state => state.weather);
    const isLoading = status === 'loading';

    useEffect(() => {
        if (cityName && date1 && date2) {
            dispatch(fetchWeather({ cityName, date1, date2 }));
        }
    }, [cityName, date1, date2, dispatch]);

    if (isLoading) return <div>Loading weather...</div>;
    if (!weatherData) return <div>No weather data available</div>;

    const handlePrevClick = () => {
        setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
      
    const handleNextClick = () => {
        setSlideIndex((prevIndex) => (prevIndex < weatherData.days.length - 4 ? prevIndex + 1 : prevIndex));
    };

    return (
        <div className="weather-period-container">
            <Button className="button-prev" content="←" onClick={handlePrevClick} disabled={slideIndex === 0} />
            <div className="weather-period">
                {weatherData.days.slice(slideIndex, slideIndex + 4).map((day, index) => {
                    const date = new Date(day.datetime);
                    const options = { weekday: 'long' };
                    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
                    
                    return (
                        <div key={index} className="weather-day">
                            <div className="day-name">{dayName}</div>
                            <PictureWeather className='weather-icon' iconName={day.icon} />
                            <div>{day.tempmax}°C / {day.tempmin}°C</div>
                            <div>{date.toLocaleDateString()}</div>
                        </div>
                    );
                })}
            </div>
            <Button className="button-next" content="→" onClick={handleNextClick} disabled={slideIndex >= weatherData.days.length - 4} />
        </div>
    );
};

export default WeatherPeriod;