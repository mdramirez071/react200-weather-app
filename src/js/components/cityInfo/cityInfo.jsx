import React, { Component } from 'react';

export default class CityInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      cityName,
      lon,
      lat,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windSpeed
    } = this.props;

    return (
      <div className='card border-0'>
        <div className='card-header text-white bg-info'>City Information</div>
        <div className='card-body'>
          <h1 className='card-title text-center'>{ cityName }</h1>
          <p className='card-text text-center' style={{ fontSize: '14px' }}>Lat/Long: { lat }, { lon }</p>
          <hr/>
          <div className='row'>
            {/* TEMPERATURE */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Temperature</h5>
                  <p className='card-text text-center'>{ temp }°F</p>
                </div>
              </div>
            </div>

            {/* PRESSURE */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Pressure</h5>
                  <p className='card-text text-center'>{ pressure }</p>
                </div>
              </div>
            </div>

            {/* HUMIDITY */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Humidity</h5>
                  <p className='card-text text-center'>{ humidity }%</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            {/* LOWEST TEMP */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Lowest Temp</h5>
                  <p className='card-text text-center'>{ temp_min }°F</p>
                </div>
              </div>
            </div>

            {/* HIGHEST TEMP */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Highest Temp</h5>
                  <p className='card-text text-center'>{ temp_max }°F</p>
                </div>
              </div>
            </div>

            {/* WIND SPEED */}
            <div className='col-md-4'>
              <div className='card border-light'>
                <div className='card-body'>
                  <h5 className='card-title text-center font-weight-bold'>Wind Speed</h5>
                  <p className='card-text text-center'>{ windSpeed }mph</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}