/*
* Class Work
*
* ### Задача 2
*
* Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия.
*/

var Timer = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            interval: setInterval(this.counterFunc, 1000)
        }
    },
    counterFunc: function() {
        this.setState({
            counter: ++this.state.counter
        })
    },

    render: function() {
        return <h1>{this.state.counter}</h1>
    }
});

ReactDOM.render(
    <Timer/>,
    document.getElementById('root')
);