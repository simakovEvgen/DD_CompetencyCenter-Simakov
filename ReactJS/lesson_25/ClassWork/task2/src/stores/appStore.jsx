import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.jsx'


class AppStore extends EventEmitter {
    constructor() {
        super();
        this.count = 0;

    }

    getCounter(){
        return this.count;
    }
    startCount(){

    }
    counterFunc() {
        this.count++;
        console.log(this.count)
    }
    clearFunc(){
        this.count = 0;
    }

    handleActions(action) {
        switch (action.type) {
            case "START": {
                this.emit('startCount');
                break;
            }
            case "CLEAR": {
                this.emit('clearCount');
                break;
            }
        }
    }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;