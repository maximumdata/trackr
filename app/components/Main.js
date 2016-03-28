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
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Derp</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
