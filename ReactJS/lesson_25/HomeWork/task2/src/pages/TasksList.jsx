var React = require('react');

var appStore = require('../stores/appStore.jsx');

var appActions = require('../actions/appActions.jsx');

var AddTask = require('./AddTask.jsx');

class TasksList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: appStore.getTasks(),
            currentId: '',
        };
        this.removeItem = this.removeItem.bind(this);
        this.updateTasks = this.updateTasks.bind(this);
        this.checked = this.checked.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentWillMount() {

        appStore.on('CHANGE', () => {
            this.updateTasks();
        });
    }

    updateTasks(){
        this.setState({ tasks: appStore.getTasks() })
    }

    removeItem(event){
        appActions.removeItem(event.target.dataset.id)
        console.log(event.target.dataset.id)
    }

    checked(event){
        appActions.checkItem(event.target.dataset.id)
        console.log(event.target.dataset.id)
    }

    handleSearch(event) {

        let searchQuery = event.target.value.toLowerCase();
        console.log(searchQuery)
        appActions.searchItems(searchQuery);
    }

    render() {
        return (
            <div>
                <div className="search">Search Task:
                    <input type="text" onChange={this.handleSearch}/>
                </div>
                <ul>
                    {
                        appStore.getTasks().map((el) =>
                            <li key={el.id}>
                                {el.task}
                                <span onClick={this.checked}
                                      className="y-point"
                                      style={{color: el.checked ? 'green' : 'orange'}}
                                      data-id={el.id}>
                                {el.checked ? '  (Done)  ' : '  (In Process)  '}
                                </span>
                                <span data-id={el.id}
                                      className="x-point"
                                      onClick={this.removeItem}>
                                &#215;
                                </span>
                            </li>
                        )
                    }
                </ul>
                <AddTask/>
            </div>
        )}
}

module.exports = TasksList;
