$ = JQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

(function(win) {
    "use strict";
        var App = createReactClass({
            render: function() {
                var Child;

                switch(this.props.route){
                    case 'about': Child = About; break;
                    case 'authors': Child = Authors; break;
                    default: Child = Home;
                }

                return(
                    <div>
                        <Header/>
                        <Child/>
                    </div>
                )
            }
        });

        function render(){
            var route = win.location.hash.substr(1);
            ReactDOM.render(<App route={route}/>, document.getElementById('app'));
        }

        win.addEventListener('hashchange', render);
        render();
})(window);