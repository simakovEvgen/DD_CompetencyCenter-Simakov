import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.jsx'


class AppStore extends EventEmitter {
    constructor() {
        super();
        this.result = 0;
        this.getResult = this.getResult.bind(this);
        this.plusFunc = this.plusFunc.bind(this);
        this.minusFunc = this.minusFunc.bind(this);
        this.multiFunc = this.multiFunc.bind(this);
        this.divideFunc = this.divideFunc.bind(this);
    }
    getResult(){
        return this.result
    }
    plusFunc(a, b){
        this.result =  a + b
    }
    minusFunc(a, b){
        this.result = a - b
    }
    multiFunc(a, b) {
        this.result = a * b
    }
    divideFunc(a, b){
        this.result = a / b
    }

    handleActions(action) {
        switch (action.type) {
            case "PLUS": {
                this.emit('plus');
                break;
            }
            case "MINUS": {
                this.emit('minus');
                break;
            }
            case "MULTI": {
                this.emit('multi');
                break;
            }
            case "DIVIDE": {
                this.emit('divide');
                break;
            }
        }
    }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;