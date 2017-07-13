var React = require('react');

var appStore = require('../stores/appStore.jsx');
var appActions = require('../actions/appActions.jsx');
var AddTask = require('./AddTask.jsx');
var TasksList = require('./TasksList.jsx');

class App extends React.Component{
    render() {
        return (
            <div>
                <TasksList/>
            </div>
        )
    }
}

module.exports = App;
