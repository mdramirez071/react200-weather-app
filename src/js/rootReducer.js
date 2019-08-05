import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer.js';

const rootReducer = combineReducers({
// add reducers
  weatherInfo: searchReducer
});

export default rootReducer;