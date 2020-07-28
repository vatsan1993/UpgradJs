import React from 'react';

// function App() {
//   // returning an arrays of elements with same level
//   return [<h1>Phonebook</h1>, <div>lorem ipsum</div>];
// }

import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <h1>Phonebook</h1>
      <div>lorem ipsum</div>
    </Fragment>
  );

  // return <div>Phone Directory</div>;

  // return (
  //   <div>
  //     {/* <div>Phone Directory</div>
  //     <button>Add</button>
  //     <div>
  //       <span>Name</span>

  //       <span>Phone</span>
  //     </div> */}

  //     <div className='myTempClass'>
  //       <label htmlFor='Name'></label>
  //       <input
  //         type='text'
  //         id='name'
  //         placeholder='Type here'
  //         defaultValue='Srivatsan'
  //       />
  //     </div>
  //   </div>
  // );
}

export default App;
