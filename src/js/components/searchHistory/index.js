import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

function mapStoreToProps(store) {
    return {
      cityName: store.weatherInfo.cityName,
      history: store.weatherInfo.history
    };
}

export default connect(mapStoreToProps)(SearchHistory);