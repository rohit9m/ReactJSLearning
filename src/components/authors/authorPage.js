"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var AuthorApi = require('../../api/authorAPI');
var AuthorList = require('./authorList');

var Authors = createReactClass({
    getInitialState:function(){
        return{
            authors: []
        };
    },

    componentDidMount: function () {
        if(this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports= Authors;