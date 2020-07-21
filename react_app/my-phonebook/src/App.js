import React from 'react';

function App() {
  return (
    <div>
      {/* <div>Phone Directory</div>
      <button>Add</button>
      <div>
        <span>Name</span>
  
        <span>Phone</span>
      </div> */}

      <div className='myTempClass'>
        <label htmlFor='Name'></label>
        <input
          type='text'
          id='name'
          placeholder='Type here'
          defaultValue='Srivatsan'
        />
      </div>
    </div>
  );
}

export default App;
