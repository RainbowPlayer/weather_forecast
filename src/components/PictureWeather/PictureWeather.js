import ClearDay from '../../assets/Icons/clear-day.svg'
import ClearNight from '../../assets/Icons/clear-night.svg'
import Cloudy from '../../assets/Icons/cloudy.svg'
import Fog from '../../assets/Icons/fog.svg'
import Hail from '../../assets/Icons/hail.svg'
import PartlyCloudyDay from '../../assets/Icons/partly-cloudy-day.svg'
import PartlyCloudyNight from '../../assets/Icons/partly-cloudy-night.svg'
import RainSnowShowersDay from '../../assets/Icons/rain-snow-showers-day.svg'
import RainSnow from '../../assets/Icons/rain-snow.svg'
import Rain from '../../assets/Icons/rain.svg'
import ShowersDay from '../../assets/Icons/showers-day.svg'
import Snow from '../../assets/Icons/snow.svg'
import ShowersNight from '../../assets/Icons/showers-night.svg'
import ThunderRain from '../../assets/Icons/thunder-rain.svg'
import ThunderShowersDay from '../../assets/Icons/thunder-showers-day.svg'
import ThunderShowersNight from '../../assets/Icons/thunder-showers-night.svg'
import Thunder from '../../assets/Icons/thunder.svg'
import Wind from '../../assets/Icons/wind.svg'


const ICON_MAP = {
    'clear-day': ClearDay,
    'clear-night': ClearNight,
    'cloudy': Cloudy,
    'fog': Fog,
    'hail': Hail,
    'partly-cloudy-day': PartlyCloudyDay,
    'partly-cloudy-night': PartlyCloudyNight,
    'rain-snow-showers-day': RainSnowShowersDay,
    'rain-snow': RainSnow,
    'rain': Rain,
    'showers-day': ShowersDay,
    'showers-night': ShowersNight,
    'snow': Snow,
    'thunder-rain': ThunderRain,
    'thunder-showers-day': ThunderShowersDay,
    'thunder-showers-night': ThunderShowersNight,
    'thunder': Thunder,
    'wind': Wind
}

const PictureWeather = ({ iconName, className }) => {

    const IconSrc = ICON_MAP[iconName];
    
    return(
        <div>
            <img src={IconSrc} alt={iconName} className={className} />
        </div>
        
    )
}

export default PictureWeather;