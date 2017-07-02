/*
* Home Work
*
* ### Задача 1
*
* Создайте React компонент-счетчик. Он должен отображать на странице две кнопки (+ и -) и элемент h1 для вывода текущего счета на экран.
*/

var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        }
    },

    positiveCount: function() {
        this.setState({
            counter: ++this.state.counter
        })
    },

    negativeCount: function() {
        this.setState({
            counter: --this.state.counter
        })
    },

    render: function() {
        return <div>
                    <h1>{this.state.counter}</h1>
                    <input type="button" value='+' onClick={this.positiveCount}/>
                    <input type="button" value='-' onClick={this.negativeCount}/>
               </div>
    }
});


ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);