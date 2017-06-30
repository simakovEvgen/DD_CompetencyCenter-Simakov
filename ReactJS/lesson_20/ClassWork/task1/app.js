/*
* Class Work
*
* ### Задача 1
*
* Создайте React компонент Parent, отображающий на странице произвольный текст в теге h1.
* Создайте дочерний компонент Child, отображающий произвольный текст в теге h3.
*/

var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello, I'am H1 Parent</h1>
                {this.props.children}
            </div>
        )
    }
});

var Child = React.createClass({
    render: function() {
        return (
            <h3>Hello, I'am H3 Child</h3>
        )
    }
})

ReactDOM.render(
    <div>
        <Parent><Child/></Parent>
    </div>,
    document.getElementById('root')
);