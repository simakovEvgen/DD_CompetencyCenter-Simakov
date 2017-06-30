/*
* Class Work
*
* ### Задача 3
*
* Создайте React компонент, который содержит checkbox и элемент div.
* При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).
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
            <div className={this.state.checked ? "myClass" : "otherClass"}>
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