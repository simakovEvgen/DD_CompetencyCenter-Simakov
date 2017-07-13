var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var List = require('./listChild.jsx');

class ButtonApp extends React.Component {
    constructor(){
        super();
        this.showList = this.showList.bind(this);
        this.state = { users: ['user1', 'user2', 'user3', 'user4'] }
    }
    showList(){
        this.props.changeBool(!this.props.showOrNot)

    }

    render() {
        return (
            <div>
                <button onClick={this.showList}>SHOW ME</button>
                {this.props.showOrNot ? '  Click the button ' : <List items={this.state.users}/>}
            </div>
        )}
}

//функция для привязки состояния приложения к props (свойствам компонента)
function mapStateToProps(state) {
    return {
        showOrNot: state
    }
}

//функция для привязки actions к props (свойствам компонента)
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeBool: actions.changeBool
    } , dispatch )
}

// привязка actions и state к React компоненту
module.exports = connect(mapStateToProps, matchDispatchToProps)(ButtonApp);