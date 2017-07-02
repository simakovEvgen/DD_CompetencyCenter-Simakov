/*
* Class Work
*
* ### Задача 1
*
* Создайте React компонент, отображающий кнопку и элемент div.
* Добавьте на страницу тег style с двумя классами – black и red, задающими соответствующий background-color элементу.
* Реализуйте переключение этих классов для элемента div при клике по кнопке.
*/

var ChangeDiv = React.createClass({
    getInitialState: function () {
        return {
            checked: false
        }
    },
    handleCheck: function(){
        this.setState({checked: !this.state.checked});
    },
    render: function() {

        return (
            <div className={this.state.checked ? "black" : "red"}>
                This is ChangeDiv component <br />
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
            </div>
        )
    }
});

ReactDOM.render(
    <ChangeDiv/>,
    document.getElementById('root')
);