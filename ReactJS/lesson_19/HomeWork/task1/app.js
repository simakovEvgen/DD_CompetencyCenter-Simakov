/*
* Home Work
*
* ### Задача 1
*
* Создайте React компонент, который выведет на экран массив users в виде таблицы.
* Массив users для задачи:
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
*/

var users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}
    ];

var User = React.createClass({
    render: function() {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.gender}
                </td>
            </tr>
        )
    }
});

var Table = React.createClass({
    render: function() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Gender
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(function(el, index) {
                        return <User key={index} name={el.name} gender={el.gender} />
                    })
                }
                </tbody>
            </table>
        )
    }
});

ReactDOM.render(
    <Table/>,
    document.getElementById('root')
);