import { combineReducers } from 'redux';
import historyReducer from './components/searchHistory/historyReducer.js';
import searchReducer from './components/search/searchReducer.js';

const rootReducer = combineReducers({
    searchHistory: historyReducer,
    search: searchReducer 
});

export default rootReducer;