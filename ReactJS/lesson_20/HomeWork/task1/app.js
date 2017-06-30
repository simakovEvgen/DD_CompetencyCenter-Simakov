/*
* Home Work
*
* ### Задача 1
*
* Создайте 2 React компонента – родительские компонент, содержащий поле ввода и дочерний компонент, содержащий список элементов массива users:
* ```
* var users = [{name:"Anne Montgomery",gender:"Female"},
* {name:"Annie George",gender:"Female"},
* {name:"Gary Butler",gender:"Male"},
* {name:"Lisa Mendoza",gender:"Female"},
* {name:"Marilyn Henry",gender:"Female"},
* {name:"Johnny Tucker",gender:"Male"},
* {name:"Chris Jacobs",gender:"Male"},
* {name:"Benjamin James",gender:"Male"}]
* ```
* Реализуйте следующее:
* При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка.
*/


var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

var Parent = React.createClass({

    getInitialState: function() {
        return {
            items: users
        }
    },

    handlerLimit: function(event) {
        var searchQuery = event.target.value;
        var limitedItems = users.slice(0, searchQuery);
        this.setState({
            items: limitedItems
        })
    },

    handlerKey: function(event) {
        if((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 8){
            event.preventDefault()
        }
    },

    render: function() {
        return (
            <div>
                Use just numbers & backspace.<br />
                <input type="text" onChange={this.handlerLimit} onKeyDown={this.handlerKey}/><br />
                <ul>
                    {
                        this.state.items.map(function(el, i){
                            return <Child key={i} name={el.name} gender={el.gender}/>
                        })
                    }
                </ul>
            </div>
        )
    }
});

var Child = React.createClass({
    render: function() {
        return (
            <li key={this.props.index}>{this.props.name} - {this.props.gender}</li>
        )
    }
});

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
);