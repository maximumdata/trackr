import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

class SearchLayout extends React.Component {
  render() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
}

class UserList extends React.Component {
  render() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Rachel</li>
        <li>Michael</li>
      </ul>
    );
  }
}

class WidgetList extends React.Component {
  render() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route>
    </Route>
  </Router>, document.getElementById('root'));
