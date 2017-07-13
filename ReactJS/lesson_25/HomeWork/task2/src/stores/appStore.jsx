import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.jsx'


class AppStore extends EventEmitter {

    constructor() {
        super();

        this.tasks = [
            {task: 'Do Class Work', checked: true, id: `${Date.now()}`},
            {task: 'Do Home Work', checked: true, id: `${Date.now()}`+1},
            {task: 'Write Music', checked: false, id: `${Date.now()}`+2},
        ];

        this.displayedContacts = 0;
        this.getTasks = this.getTasks.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.searchItems = this.searchItems.bind(this);
    }

    getTasks(){
        if (this.displayedContacts){
            return this.displayedContacts
        } else {
            return this.tasks
        }
    }

    addTask(newTask){
        this.tasks.push(newTask);
        console.log(this.tasks)
    }

    changeCheck(id){
        var newData = [];
        for ( var i = 0; i < this.tasks.length; i++ ) {

            if ( this.tasks[i].id === id ) {
                this.tasks[i].checked = !this.tasks[i].checked
            }
            newData.push(this.tasks[i])
        }
        this.tasks = newData;
    }

    removeItem(id) {

        var newData = [];
        for ( var i = 0; i < this.tasks.length; i++ ) {

            if ( this.tasks[i].id === id ) {
                console.log('deleted item id' + this.tasks[i].id)
                continue;
            }
            newData.push(this.tasks[i])
        }
        this.tasks = newData;
    }

    searchItems(string){
        var searchedContacts = this.tasks.filter(function(el) {
            var searchValue = el.task.toLowerCase();
            return searchValue.indexOf(string) !== -1;
        });
        this.displayedContacts = searchedContacts;
        if(string == ''){
            this.displayedContacts = 0
        }
    }

    handleActions(action) {
        switch (action.type) {
            case "ADD_ITEM": {
                this.emit('CHANGE');
                this.addTask(action.item);
                break;
            }
            case "REMOVE": {
                this.emit('CHANGE');
                this.removeItem(action.id);
                break;
            }
            case "CHECK": {
                this.emit('CHANGE');
                this.changeCheck(action.id);
                break;
            }
            case "SEARCH": {
                this.emit('CHANGE');
                this.searchItems(action.string);
                break;
            }
        }
    }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;