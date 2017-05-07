import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Index from './component/index';
import './css/master.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <h1 className="sidebar-title">zora</h1>
            <div className="sidebar-avatar">
              <img src="https://placeimg.com/100/100/people" className="img-round"/>
              <a href="link" className="sidebar-gear">
                <i className="fa fa-gear"/>
              </a>
              <ul>
                <li className="active"><i className="fa fa-home" aria-hidden="true"></i> <Link to="/test">PROPERTIES</Link></li>
                <li><i className="fa fa-user-circle-o" aria-hidden="true"></i> <Link to="/test">APPLICANTS</Link></li>
                <li><i className="fa fa-users" aria-hidden="true"></i> <Link to="/test">TENNANTS</Link></li>
                <li><i className="fa fa-inbox" aria-hidden="true"></i> <Link to="/test">MESSAGES</Link></li>
              </ul>

            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={Index}/>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
