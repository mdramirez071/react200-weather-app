import React, { Component } from 'react';

export default class SearchHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='card border-0'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body'>
          <ul className='list-unstyled'>
            { history.map( (histories, index) => {
              return (
                <li key={ index }>
                  <p>{ histories.cityName }, { histories.date }</p>
                </li>
              )}
            )}
          </ul>
        </div>
      </div>
    );
  }
}
