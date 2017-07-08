import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.jsx'

class AppStore extends EventEmitter {
    constructor() {
        super()
        this.styles = {
            background: 'green'
        }
    }

    getStyles() {
        return this.styles
    }

    handleActions(action) {

        switch (action.type) {
            case "STYLES": {
                this.emit('stylesGet')
                console.log(this.styles);
                break;
            }
        }
    }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;