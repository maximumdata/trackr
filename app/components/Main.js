// var React = require('react');
// var ReactDOM = require('react-dom');
//
//
// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         Hello World! <br /> shut up
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(<Main />, document.getElementById('app'));

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
