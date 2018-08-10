"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var AuthorAPI = require('../../api/authorAPI');

var Authors = createReactClass({
    getInitialState:function(){
        return{
            authors: []
        };
    },

    componentWillMount: function() {
        this.setState({authors: AuthorAPI.getAllAuthors()});
    },

    render: function(){
        var createAuthorRow = function(author){
            return(
                <tr key={author.id}>
                    <td>
                        <a href={"/#authors"+ author.id}>{author.id}</a>
                    </td>
                    <td>
                        {author.firstName} {author.lastName}
                    </td>
                </tr>
            );
        };
        return(
            <div>
            <h1>Authors</h1>
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.state.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
            </div>
        );
    }
});

module.exports= Authors;