import React from 'react';
import Header from './Header';
import './App.css';

import { Fragment } from 'react';

const subscribers = [
  { id: 1, name: 'Srivatsan', phone: '9110301748' },
  { id: 2, name: 'Sridharan', phone: '8886010444' },
];
function App() {
  return (
    <div>
      <Header />
      <div className='component-body-container'>
        <button className='custom-btn add-btn'>Add</button>
        <div className='grid-container heading-container'>
          <span className='grid-item name-heading'>Name</span>
          <span className='grid-item phone-heading'>Phone</span>
        </div>
        {subscribers.map((sub) => {
          return (
            <div key={sub.id} className='grid-container'>
              <span className='grid-item '>{sub.name}</span>
              <span className='grid-item '>{sub.phone}</span>
              <span className='grid-item action-btn-container'>
                <button className='custom-btn delete-btn'>DELETE</button>
              </span>
            </div>
          );
        }, subscribers)}
      </div>
    </div>
  );
}

export default App;
