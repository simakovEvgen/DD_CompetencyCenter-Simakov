/*
* Home Work
*
* ### Задача 3
*
* Создайте React компонент(используя ES6 синтаксис),
* который выведет на экран в виде таблицы массив users из предыдущей задачи.
* При клике по каждой ячейке таблицы, содержащей имя плоьзователя,
* должен запускаться метод sayHi соотстветствующего элемента массива users.
*/

class Person {

    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    fullName(){
        return (this.firstName + ' ' + this.lastName)
    }

    sayHi(){
        return ('Hello, my name is ' + this.fullName())
    }

}

//Проверка из предыдущего примера
/*const valera = new Person('Valera', 'Ivanov', 21);
console.log(valera.age);
console.log(valera.sayHi());*/

class User extends Person{
    constructor(firstName, lastName, age, gender, signUpDate = 0, id){
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

//Проверка из предыдущего примера
/*const petya = new User();
console.log(petya.signUpDate);
console.log(petya.sayHi());*/

var user1, user2, user3;

const users = [
    user1 = new User('Valera', 'Ivanov', 21, 'Male', (new Date()), 1),
    user2 = new User('Petya','Sidorov', 22, 'Male', (new Date()), 2),
    user3 = new User('Vova', 'Petrov', 23, 'Male', (new Date()), 3)
];

//Проверка из предыдущего примера
/*console.log(users[2].signUpDate);
console.log(users[0].sayHi());*/

class TableUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users
        }
    }

    render() {
        return (
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Date</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map(function(el) {
                        return (
                            <tr key={el.id}>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.age}</td>
                                <td>{el.gender}</td>
                                <td>{el.signUpDate.toString()}</td>
                                <td>{el.id}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(
    <TableUsers/>,
    document.getElementById('root')
);