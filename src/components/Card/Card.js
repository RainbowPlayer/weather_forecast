import { useDispatch } from 'react-redux';
import PictureCity from '../PictureCity/PictureCity';
import './style.css'
import { useEffect } from 'react';
import { fetchWeather } from '../../app/weatherSlice';


const Card = ({ cityName, date1, date2, onClick, isSelected }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (cityName && date1 && date2) {
            dispatch(fetchWeather({ cityName, date1, date2 }));
        }
    }, [dispatch, cityName, date1, date2]);
    
    return(
        <div className={`card ${isSelected ? 'card-selected' : ''}`} onClick={onClick}>
            <PictureCity cityName={cityName} className="cityPicture"/>
            <div className='card-content'>
                <span>{cityName}</span>
                <span>{date1} - {date2}</span>
            </div>
        </div>
        
    )
}

export default Card;