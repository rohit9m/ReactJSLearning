"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Home = createReactClass({
    render: function(){
        return(
            <div className="jumbotron">
            <h1>React JS application</h1>
            <p> Use of React , React-Router for Web apps </p>
            </div>
        );
    }
});

module.exports= Home;