var AmpersandRouter = require('ampersand-router');
var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./pages/home.jsx');
var MessagePage = require('./pages/message.jsx')

module.exports = AmpersandRouter.extend({
  renderPage(page, opts = {layout: true}) {
    ReactDOM.render(page, document.getElementById("react-container"));
  },

  routes: {
    '': 'home',
    '*404': 'fourOhFour'
  },

  home() {
    console.log("home");
    // this.renderPage(<HomePage />);
  },

  fourOhFour() {
    this.renderPage(<MessagePage title='404' message='Nothing found. :(' />);
  }

});