import Berlin from '../../assets/City/berlin.jpg'
import Paris from '../../assets/City/paris.jpg'
import Rome from '../../assets/City/rome.jpg'

const CITY_MAP = {
    'Berlin': Berlin,
    'Paris': Paris,
    'Rome': Rome
}

const PictureCity = ({ cityName, className }) => {

    const CitySrc = CITY_MAP[cityName];
    
    return(
        <img src={CitySrc} alt={CitySrc} className={className} />
    )
}

export default PictureCity;