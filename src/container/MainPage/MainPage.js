import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../app/dataCardSlice'
import Card from '../../components/Card/Card'
import './style.css'
import { useEffect, useState } from 'react'
import WeatherPeriod from '../../components/WeatherPeriod/WeatherPeriod'
import WeatherToday from '../../components/WeatherToday/WeatherToday'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import Button from "../../components/Button/Button";
import Input from '../../components/Input/Input'


const MainPage = () => {

    const dispatch = useDispatch();
    const cards = useSelector((state) => state.dataCard.items);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDate1, setSelectedDate1] = useState('');
    const [selectedDate2, setSelectedDate2] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    useEffect(() => {
        if (cards.length > 0) {
            setSelectedCity(cards[0].cityName);
            setSelectedDate1(cards[0].date1);
            setSelectedDate2(cards[0].date2);
        }
    }, [cards]);

    const handleSelectCity = (cityName, date1, date2) => {
        setSelectedCity(cityName);
        setSelectedDate1(date1);
        setSelectedDate2(date2);
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredCards = cards.filter(card => card.cityName.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return(
        <div className='container-main-page'>
            
            <div className='cards-weather-container'>
                
                <div className='card-container'>
                    <Input type="text" placeholder="Search your trip..." value={searchTerm} onChange={handleSearchChange} className="search-input" />
                {filteredCards.map((card) => (
                    <Card
                        key={card.id}
                        cityName={card.cityName} 
                        date1={card.date1} 
                        date2={card.date2}
                        isSelected={selectedCity === card.cityName}
                        onClick={() => handleSelectCity(card.cityName, card.date1, card.date2)}
                    />
                    ))}

                    <Button className="add-trip-card" onClick={openModal} content="Add Trip"/>
                </div>
                <WeatherPeriod cityName={selectedCity} date1={selectedDate1} date2={selectedDate2} />
                <WeatherToday cityName={selectedCity} date1={selectedDate1} />
            </div>
            <ModalWindow isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default MainPage;