import React from 'react';
// import React, { Component } from 'React';
// function component
let headerStyle= {
  textAlign:'center',
  padding:20,
  background:'#000',
  color:'#fff',
  textTransform:'uppercase'
};
const Header = function () {
  return <div style={headerStyle}>Phone Directory</div>;
};

// class component

// class Header extends Component {
//   render() {
//     return <div className='header'>Phone Directory</div>;
//   }
// }

export default Header;
