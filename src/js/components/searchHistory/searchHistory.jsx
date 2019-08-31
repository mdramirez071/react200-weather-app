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
        <ul className='list-group list-group-flush'>
          <div className='card-body'>
          <div className='card-footer'>{ history.map( (histories, index) => {
            return (
                <li className="list-group-item list-unstyled"
                   key={ index }>
                  <p>{ histories.cityName }, { histories.date }</p>
                </li>
              )}
            )}
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
