/* @flow */

'use strict';

var React = require('react');
var { Route, DefaultRoute } = require('react-router');

/* Components */
var Main = require('../components/main');
var Home = require('../components/home');
var About = require('../components/about');

var routes = (
  <Route handler={Main}>
    <Route name="about" path="/about" handler={About} />
    <Route name="home" path="/" handler={Home} />
  </Route>
);

module.exports = routes;