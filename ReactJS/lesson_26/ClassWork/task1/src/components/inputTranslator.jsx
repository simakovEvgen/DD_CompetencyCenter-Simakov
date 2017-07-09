var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/index.jsx');

class inputTranslator extends React.Component {
    constructor(){
        super();
        this.translatorOfInput = this.translatorOfInput.bind(this);
    }
    translatorOfInput(event){
        this.props.changeValue(event.currentTarget.value)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.translatorOfInput}/>
                <h2>{this.props.inputValue}</h2>
            </div>
        )}
}

//функция для привязки состояния приложения к props (свойствам компонента)
function mapStateToProps(state) {
    return {
        inputValue: state
    }
}

//функция для привязки actions к props (свойствам компонента)
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeValue: actions.inputValue
    } , dispatch )
}

// привязка actions и state к React компоненту
module.exports = connect(mapStateToProps, matchDispatchToProps)(inputTranslator);