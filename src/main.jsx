var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager headingColor="#3498db" title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager headingColor="#e74c3c" title="Todo" />, document.getElementById('todo'));
ReactDOM.render(<ListManager headingColor="#2ecc71" title="Christmas" />, document.getElementById('christmas'));
