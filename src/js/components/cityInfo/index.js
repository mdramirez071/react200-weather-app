import { connect } from 'react-redux';
import CityInfo from './cityInfo';

function mapStoreToProps(store) {
    return {
        cityName: store.weatherInfo.cityName,
        lon: store.weatherInfo.lon,
        lat: store.weatherInfo.lat,
        temp: store.weatherInfo.temp,
        pressure: store.weatherInfo.pressure,
        humidity: store.weatherInfo.humidity,
        temp_min: store.weatherInfo.temp_min,
        temp_max: store.weatherInfo.temp_max,
        windSpeed: store.weatherInfo.windSpeed
    };
}

export default connect(mapStoreToProps)(CityInfo);