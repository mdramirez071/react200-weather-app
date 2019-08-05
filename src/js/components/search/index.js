import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const mapStoreToProps = store => {
  return {
    city: store.weatherInfo.city
  };
}

export default connect(mapStoreToProps)(SearchBar);