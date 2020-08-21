import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [],
    };
    console.log('consructor called');
  }
  componentDidMount() {
    console.log('Component did mount called');

    let newSubscriber = {
      id: 1,
      name: 'Srivatsan',
      phone: '9110301748',
    };
    let suscriberList = this.state.subscribersListToShow;
    suscriberList.push(newSubscriber);
    this.setState({ subscribersListToShow: suscriberList });
  }

  render() {
    console.log('render called');
    return (
      <div>
        <Header heading='Phone Directory' />
        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>

          {this.state.subscribersListToShow.map((sub) => {
            return (
              <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span>
                <span className='grid-item'>{sub.phone}</span>
                <span className='grid-item action-btn-container'>
                  <button className='custom-btn delete-btn'>Delete</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
