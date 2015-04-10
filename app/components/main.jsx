"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = React.createClass({
  
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }

});

module.exports = Main;