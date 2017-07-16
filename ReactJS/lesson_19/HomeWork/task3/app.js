/*
* Home Work
*
* ### Задача 3
*
* Создайте React компонент, который отображает на странице произвольный текст.
* Компонент должен иметь такие свойства: color и fontSize.
* Установите на основе этих свойств стили для компонента.
*/

var MyStyle = React.createClass({
    render: function() {
        return <h1 style={{'color' : this.props.color, 'fontSize' : this.props.size}}> My name is {this.props.name} and I love {this.props.action}! </h1>;
    }
});



ReactDOM.render(
    <MyStyle name="Jack" action="guitar playing" color="green" size="50px"/>,
    document.getElementById('root')
);