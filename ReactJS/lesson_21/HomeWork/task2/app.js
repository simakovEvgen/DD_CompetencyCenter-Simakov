/*
* Home Work
*
* ### Задача 2
*
* Создайте страницу-калькулятор. На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение, вычитание, умножение, деление), 2 поля ввода и элемент для отображения результата.
* Сделайте так, чтобы в поля ввода разрешалось вводить только цифры.
*/

var Calculate = React.createClass({
    getInitialState: function() {
        return {
            firstField: null,
            secondField: null,
            result: ""
        }
    },

    checkerFunc: function(event) {
        if (event.key != "0" && event.key != "1" && event.key != "2" && event.key != "3" && event.key != "4" && event.key != "5" &&  event.key != "6" && event.key != "7" && event.key != "8" && event.key != "9"){
            event.preventDefault()
        }
    },

    firstFieldWrite: function(event) {
        this.setState({
            firstField: event.target.value
        })
    },

    secondFieldWrite: function(event) {
        this.setState({
            secondField: event.target.value
        })
    },

    plusFunc: function() {
        this.setState({
            result: (+this.state.firstField) + (+this.state.secondField)
        })
    },

    minusFunc: function() {
        this.setState({
            result: (+this.state.firstField) - (+this.state.secondField)
        })
    },

    multiFunc: function() {
        this.setState({
            result: (+this.state.firstField) * (+this.state.secondField)
        })
    },

    divideFunc: function() {
        this.setState({
            result: (+this.state.firstField) / (+this.state.secondField)
        })
    },

    render: function() {
        return <div>
            <input type="text" onKeyPress={this.checkerFunc} onChange={this.firstFieldWrite}/>
            <input type="text" onKeyPress={this.checkerFunc} onChange={this.secondFieldWrite}/>
            <br/><br/>
            <input type="button" value="+" onClick={this.plusFunc}/>
            <input type="button" value="-" onClick={this.minusFunc}/>
            <input type="button" value="*" onClick={this.multiFunc}/>
            <input type="button" value="/" onClick={this.divideFunc}/>
            <p>Result: {this.state.result}</p>
        </div>
    }
});

ReactDOM.render(
    <Calculate/>,
    document.getElementById('root')
);