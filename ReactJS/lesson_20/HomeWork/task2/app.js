/*
* Home Work
*
* ### Задача 2
*
* Модифицируйте код предыдущей задачи. Реализуйте следующее:
* При каждом обновлении свойств компонента, содержащего список users,  его текст окрашивается в случайный цвет.
* Используйте при решении задачи методы жизненного цикла React компонентов. ъ
*
* Функция для получения случайного цвета:
* ```
*             function getRandomColor() {
*                 var h = Math.floor(Math.random() * (255 - 1) + 1);
*                 var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
*                 var l = '50%';
*                 var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
*                 return randomColor;
*             }
* ```
*/

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}]

function getRandomColor()  {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}

var Parent = React.createClass({

    getInitialState: function() {
        return {
            items: users,
            color: "Green"
        }
    },

    handlerLimit: function(event) {
        var searchQuery = event.target.value;
        var limitedItems = users.slice(0, searchQuery);
        this.setState({
            items: limitedItems
        })
    },

    componentWillUpdate: function() {
        this.setState({
            color: this.randomColor
        })
    },

    randomColor: getRandomColor(),

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
                <ul style={{color: this.state.color}}>
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
            <li  key={this.props.index}>{this.props.name} - {this.props.gender}</li>
        )
    }
});

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
);