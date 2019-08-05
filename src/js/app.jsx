import React from 'react';
import SearchBar from './components/SearchBar';
import CityInfo from './components/cityInfo';
import SearchHistory from './components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className='container'>
          <div className='jumbotron bg-info text-white text-center'>
            <h1 className='display-2 text-center font-weight-bold'>SDCS Weather App</h1>
            <h4 className='text-center font-weight-bold'>Check out the weather to see if you'll need an umbrella!</h4>
          </div>
          <SearchBar />

          <div className='row'>
            <div className='col-12 col-md-7 mb-4'>
              <CityInfo />
            </div>
            <div className='col-12 col-md-5 mb-4'>
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}