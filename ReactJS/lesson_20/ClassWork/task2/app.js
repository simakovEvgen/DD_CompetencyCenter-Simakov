/*
* Class Work
*
* ### Задача 2
*
* Создайте React компонент, который имеет два свойства(props) типа number  и свойство mode типа boolean.
* В зависимости от значения свойства mode(true/false) компонент должен выводить на экран либо сумму свойств типа number,
* либо результат их конкатенации.
*/

var MyComp = React.createClass({

    getDefaultProps: function() {
        return {
            num1: 25,
            num2: 45,
            mode: true
        }
    },

    render: function() {
        return (
            <div>First prop numder is {this.props.num1}, second prop number is {this.props.num2}.<br /> {this.props.mode ? "Mode True: " + (this.props.num1 + this.props.num2) : "Mode False: " + (this.props.num1.toString() + this.props.num2.toString())}</div>
        )
    }
});

ReactDOM.render(
    <div>
        <MyComp mode={true}/>
        <MyComp mode={false}/>
    </div>,
    document.getElementById('root')
);