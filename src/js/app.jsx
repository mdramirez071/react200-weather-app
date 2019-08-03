import React from 'react';
import { connect } from 'react-redux';
import CityInfo from './components/cityInfo/cityInfo.jsx';
import SearchHistory from './components/searchHistory/searchHistory.jsx';
import Search from './components/search/search.jsx';

//import { } from './actions'; //will need to import/grab the 3 action creator functions

class App extends React.Component 
{
  constructor (props)
  {
    super(props);

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handlePreloaded = this.handlePreloaded.bind(this);
  }
  //create the 3 handleChange functions below that handle the city being inputted 
  //by the user, handle the search of that city, and handle the cities 
  //that will be preloaded

  render() 
  {
    render 
    (
<div className='container'>
  <div className="jumbotron">
      <h1 className="text-left font-weight-light">SDCS Weather Application</h1>
      <h5 className="text-left font-weight-light">Always know if you'll need an umbrella!</h5>
      </div> 

      <Search
        searchValue = { this.searchValue } //this represents the input field search bar
        handleCityInput={ this.handleCityInput }
        handleOnSearch = { this.handleOnSearch }
        handlePreloaded = { this.handlePreloaded }
        ></Search>
        <div className="row">
        <div>
            <CityInfo
               
            ></CityInfo>
          </div>
          <div className="col">
            <SearchHistory
                
            ></SearchHistory>
            </div>
          </div>
</div>

    )
  }
}
function mapStoreToProps(store) {
  return {
    //insert the 3 features of the Store that need to be mapped to Props
    //the weatherData for the current city being selected
    //the searchValue which is a city inputted by the user
    //the search History of a city
    searchValue: store.search.searchValue,
    weatherData: store.search.weatherData,
    searchHistory: store.history.searchHistory
  };
}
//Using the connect method we can wrap our App container component to mapStoretoProps function
export default connect (mapStoreToProps)(App);
