"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var About = createReactClass({
    render: function(){
        return(
            <div>
            <h1>About</h1>
            <p> This application uses the following technologies:
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Node</li>
                <li>Gulp</li>
                <li>Browserify</li>
                <li>Bootstrap</li>
            </ul>
            </p>
            </div>
        );
    }
});

module.exports= About;