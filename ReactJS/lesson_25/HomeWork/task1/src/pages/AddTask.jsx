var React = require('react');

var appStore = require('../stores/appStore.jsx');
var appActions = require('../actions/appActions.jsx');

class AddTask extends React.Component{
    constructor() {
        super();
        this.state = {
            task: '',
            checked: '',
            id: ''

        };
        this.nameOfTask = this.nameOfTask.bind(this);
        this.checkOfTask = this.checkOfTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    nameOfTask(event){

        this.setState({
            task: event.target.value
        });
    }

    checkOfTask(event){
        this.setState({
            checked: event.currentTarget.checked
        });
    }

    addTask(){
        if (this.state.task != ""){
            let item = {};
            item.checked = this.state.checked;
            item.id = `${Date.now()}`;
            item.task = this.state.task;
            appActions.addItem(item);
            console.log(item)
        } else {
            alert("Field must be fielded!")
        }
    }
    render() {
        return (
            <div className="panel well">
                <div>
                    <span>Name of Task</span>
                    <input type="text" onChange={this.nameOfTask}/>
                </div>
                <div>
                    <span>Check</span>
                    <input type="checkbox" onChange={this.checkOfTask}/>
                </div>
                <input type="button" value='  Add  ' onClick={this.addTask}/>
            </div>
        )}
}

module.exports = AddTask;
