var React = require('react');

var appStore = require('../stores/appStore.jsx');
var appActions = require('../actions/appActions.jsx');

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            styles: null
        };
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentWillMount() {
        appStore.on('stylesGet', () => {
                this.setState({ styles: appStore.getStyles() })
            }
        )
    }

    clickHandler() {
        appActions.getStyles();
    }

    render() {
        return (
            <div className="panel well">
                <button onClick={this.clickHandler}>Click me!</button>
                <div style={this.state.styles}>I will be Green</div>
            </div>
        )}
}

module.exports = App;