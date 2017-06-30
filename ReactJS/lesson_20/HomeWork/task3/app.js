/*
* Home Work
*
* ### Задача 3
*
* Добавьте на страницу checkbox, клик по которому будет переключать
* режим отображения данных массива users между таблицей и списком
*/

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

var tools = true;

var TableView = React.createClass({
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
                        return <TableItem key={index} name={el.name} gender={el.gender} />
                    })
                }
                </tbody>
            </table>
        )
    }
});

var TableItem =  React.createClass({
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

var ListView = React.createClass({
    render: function() {
        return (
            <ul>
                {
                    users.map(function(el, i){
                        return <LiItem key={i} name={el.name} gender={el.gender}/>
                    })
                }
            </ul>
        )
    }
});

var LiItem = React.createClass({
    render: function() {
        return (
            <li key={this.props.index}>{this.props.name} - {this.props.gender}</li>
        )
    }
});


var ViewToogle = React.createClass({
    getInitialState: function () {
        return {
            active: true
        };
    },

    handleClick: function(event) {
        this.setState({
            active: !this.state.active
        })
    },

    render: function() {
        return (
            <div>
                {this.state.active == true ? (
                    <TableView />
                ) : this.state.active == false ? (
                    <ListView />
                ) : null}
                TABLE / LIST<input type="checkbox" onClick={this.handleClick} />
            </div>
        )
    }
});

ReactDOM.render(
    <ViewToogle/>,
    document.getElementById('root')
);