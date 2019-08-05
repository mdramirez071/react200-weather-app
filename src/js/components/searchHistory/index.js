import { connect } from 'react-redux';
import searchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
      cityName: store.weatherInfo.cityName,
      history: store.weatherInfo.history
    };
}

export default connect(mapStoreToProps)(searchHistory);