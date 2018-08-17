"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');


var AuthorList = createReactClass({
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
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
            </div>
        );
    }
});

module.exports= AuthorList;