var React = require('react');
var TableView = require('./tableView.jsx');
var ListView = require('./listView.jsx');
var Editor = require('./edit.jsx');
var appActions = require('../actions/actions.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

export default class EditView extends React.Component {
    constructor(){
        super();

        this.state = {
            currentId: ''
        };

        this.viewSwitch = this.viewSwitch.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    viewSwitch(){
        this.props.changeView(!this.props.listOrTable);
    }

    deleteTask(event){
        let id = event.target.dataset.taskId;
        this.props.deleteTask(id);
        document.getElementById('inputEditor').value = '';
        document.getElementById('isChecked').checked = false;
        this.setState({
            currentId: ''
        });

    }

    createTask(){

        if (this.state.currentId != ''){
            let changedTask = {
                id: this.state.currentId,
                task: document.getElementById('inputEditor').value,
                isChecked: document.getElementById('isChecked').checked
            };
            this.props.changeTask(changedTask);
            document.getElementById('inputEditor').value = '';
            document.getElementById('isChecked').checked = false;

            this.setState({
                currentId: ''
            });
            return;
        }
        if(document.getElementById('inputEditor').value == ''){
            alert('Field Must be fielded!');
            return;
        }
        if (this.state.currentId == ''){
            let newTask = {
                id: `${Date.now()}`,
                task: document.getElementById('inputEditor').value,
                isChecked: document.getElementById('isChecked').checked
            };
            this.props.createTask(newTask);
            document.getElementById('inputEditor').value = '';
            document.getElementById('isChecked').checked = false;
        }
    }

    editTask(event){
        let id = event.target.dataset.id;
        this.setState({
            currentId: id
        });



        document.getElementById('inputEditor').value = this.props.users.find(el => {if(id == el.id){return el}}).task;
        document.getElementById('isChecked').checked = this.props.users.find(el => {if(id == el.id){return el}}).isChecked;


    }

    render() {
        var boundEditStartHandler = this.editTask.bind(this);

        return (
            <div className="edit">
                <div className="edit-block">
                    <Editor onClick={this.createTask} tumbler={this.state.currentId}/>
                </div>
                <div className="btn-block">
                    <button onClick={this.viewSwitch}>{this.props.listOrTable ? 'To Table' : 'To List'}</button>
                </div>
                <div className="tasks-block">
                    {this.props.listOrTable
                        ?
                        <ListView items={this.props.users} onClickDelete={this.deleteTask} onClickEdit={boundEditStartHandler}/>
                        :
                        <TableView items={this.props.users} onClickDelete={this.deleteTask} onClickEdit={boundEditStartHandler}/>
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
        createTask: appActions.addTaskACT,
        changeTask: appActions.changeTaskACT,
        changeView: appActions.changeView
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(EditView);