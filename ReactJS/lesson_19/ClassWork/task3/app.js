/*
* Class Work
*
* ### Задача 3
*
* Создайте React компонент,  который принимает два числа в качестве свойств (props).
* Компонент должен выводить на экран сумму своих свойств.
*/

var Summ = React.createClass({
    render: function() {
        return (
            <h1>Сумма чисел в свойствах = {(+this.props.num1) + (+this.props.num2)}!</h1>
        )
    }
});

ReactDOM.render(
    <Summ num1={10} num2={12}/>,
    document.getElementById('root')
);