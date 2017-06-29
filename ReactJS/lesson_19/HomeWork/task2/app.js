/*
* Home Work
*
* ### Задача 2
*
* Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit
*/

class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: '', login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if(event.target.name == "name"){
            this.setState({name: event.target.value})
        }
        if(event.target.name == "login"){
            this.setState({login: event.target.value})
        }
    }

    handleSubmit(event){
        alert('A form was submitted: ' + this.state.name + ' - As Name, and ' + this.state.login + ' - As Login');
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                </label><br />
                <label>
                    Login
                    <input type="text" name="login" onChange={this.handleChange} value={this.state.vlogin} />
                </label><br />
                <input type="submit" value="Try Me!"/>
            </form>
        )
    }
}

ReactDOM.render(
    <MyForm/>,
    document.getElementById("root")
);