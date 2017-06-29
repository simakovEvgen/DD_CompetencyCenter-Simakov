/*
* Class Work
*
* ### Задача 2
*
* Реализуйте задание задачи 1 с помощью создания React компонента
*/


var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello World!</h1>
        );
    }
});

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('root')
);