/*
* Home Work
*
* ### Задача 3
*
* Создайте React-компонент, содержащий форму со следующими полями:
* Name
* Email
* Phone number
* Message
* Используя обработчики событий,  реализуйте валидацию формы
*/

var MyForm = React.createClass({
    getInitialState: function() {
        return {
            messageVal: false,
            emailVal: false,
            nameVal: false,
            mobileVal: false
        }
    },

    nameChecker: function (event) {
        if (event.charCode < 65 || event.charCode > 122) {
            alert('Just symbols');
            event.preventDefault()
        }
        if(event.target.value != ""){
            this.setState({
                nameVal: true
            })
        }
    },

    emailChecker: function (event) {
        if ((event.charCode < 48 || event.charCode > 57) && event.key != "@" && event.key != "." && event.key != "_" && (event.charCode < 65 || event.charCode > 122)) {
            alert('Just symbols, numbers and _ @ .');
            event.preventDefault()
        }
        if(event.target.value != ""){
            this.setState({
                emailVal: true
            })
        }
    },

    mobileChecker: function (event) {
        if (event.charCode < 48 || event.charCode > 57) {
            alert('Just numbers');
            event.preventDefault()
        }
        if(event.target.value != ""){
            this.setState({
                mobileVal: true
            })
        }
    },

    messageChecker: function (event) {
        if (event.target.value.length > 20) {
            this.setState({
                messageVal: true
            })
        } else {
            this.setState({
                messageVal: false
            })
        }
    },

    submitForm: function() {
        if ((!this.state.emailVal) || (!this.state.messageVal) || (!this.state.nameVal) || (!this.state.mobileVal)){
            alert("Message must be longer than 20 symbols And all fields must be fielded")
        } else {
            alert("Well Done!")
        }
    },

    render: function() {
        return (
            <form>
                <label htmlFor="name">Name<br/>
                    <input id="name" type="text" name="Name" onKeyPress={this.nameChecker}/>
                </label><br/>
                <label htmlFor="email">Email<br/>
                    <input id="email" type="text" name="Email" onKeyPress={this.emailChecker}/>
                </label><br/>
                <label htmlFor="mobile">Phone number<br/>
                    <input id="mobile" type="text" name="Phone number" onKeyPress={this.mobileChecker}/>
                </label><br/>
                <label htmlFor="message">Message<br/>
                    <input id="message" type="text" name="Message" onChange={this.messageChecker}/>
                </label><br/>
                <input type="button" value="Submit" onClick={this.submitForm}/><br/>
            </form>
        )
    }
});

ReactDOM.render(
    <MyForm/>,
    document.getElementById('root')
);