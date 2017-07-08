var React = require('react');

var appStore = require('../stores/appStore.jsx');
var appActions = require('../actions/appAction.jsx');

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            interval: "",
            stopDoubleClick: false,
            counter: 0
        };
        this.startCount = this.startCount.bind(this);
        this.counterTick = this.counterTick.bind(this);
        this.counterReset = this.counterReset.bind(this);
        this.counterStop = this.counterStop.bind(this);
    }

    componentWillMount() {
        appStore.on('startCount', () => {
                appStore.counterFunc();
                this.setState({ counter: appStore.getCounter() })
            }
        )
        appStore.on('clearCount', () => {
                appStore.clearFunc();
                this.setState({ counter: appStore.getCounter() })
            }
        )
    }

    componentDidMount(){
        this.startCount();
    }

    startCount() {
        if(!this.state.stopDoubleClick) {
            this.setState({interval: setInterval(this.counterTick, 1000), stopDoubleClick: true})
        }
    }

    counterTick(){
        appActions.getStarted();
    }

    counterReset() {
        this.setState({
            stopDoubleClick: false
        });
        appActions.getClear();
    }

    counterStop() {
        clearInterval(this.state.interval);
        this.setState({
            stopDoubleClick: false
        });
    }

    render() {
        return (
            <div className="panel well">
                <div>{this.state.counter}</div>
                <input type="button" value='start' onClick={this.startCount}/>
                <input type="button" value='stop' onClick={this.counterStop}/>
                <input type="button" value='clear' onClick={this.counterReset}/>
            </div>
        )}
}

module.exports = App;
