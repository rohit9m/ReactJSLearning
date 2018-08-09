"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Header = createReactClass({
    render: function(){
        return(
            <nav className="navbar navbar-default">
             <div className="container-fluid">
               <a href="/" className="navbar-brand">
                 <img src="images/logo.jpeg"/>
               </a>
               <ul className="nav navbar-nav">
                 <li><a href="/">AHome</a></li>
                 <li><a href="/#about">About</a></li>
               </ul>
             </div>
            </nav>
        );
    }
});

module.exports= Header;