var React = require('react');
var TableView = require('./tableView.jsx');
var ListView = require('./listView.jsx');

var appActions = require('../actions/actions.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var Link = require('react-router-dom').Link;


export default class App extends React.Component {
    constructor(){
        super();

        this.viewSwitch = this.viewSwitch.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    viewSwitch(){
        this.props.changeView(!this.props.listOrTable);
    }

    deleteTask(event){
        let id = event.target.dataset.taskId;
        this.props.deleteTask(id);
    }

    /*createTask(){
        if(document.getElementById('inputEditor').value == ''){
            alert('Field Must be fielded!');
            return;
        }
        let newTask = {
            id: `${Date.now()}`,
            task: document.getElementById('inputEditor').value,
            isChecked: document.getElementById('isChecked').checked
        };
        this.props.createTask(newTask);
        document.getElementById('inputEditor').value = '';
        document.getElementById('isChecked').checked = false;
    }*/

    render() {
        return (
            <div className="index">
                <div className="btn-block">
                    <button onClick={this.viewSwitch}>{this.props.listOrTable ? 'To Table' : 'To List'}</button>
                    <Link to="/edit" replace><button>Edit</button></Link>
                    <Link to="/about" replace><button>About</button></Link>
                </div>
                <div className="tasks-block">
                    {this.props.listOrTable
                        ?
                        <ListView items={this.props.users} onClickDelete={this.deleteTask}/>
                        :
                        <TableView items={this.props.users} onClickDelete={this.deleteTask}/>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        listOrTable: state.listOrTable
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteTask: appActions.deleteTaskACT,
        changeView: appActions.changeView
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);