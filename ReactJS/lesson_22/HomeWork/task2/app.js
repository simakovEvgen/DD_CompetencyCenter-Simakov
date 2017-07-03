/*
* Home Work
*
* ### Задача 2
*
* Создайте класс User, который наследует от класса Person (из предыдущей задачи), со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
* Создайте несколько экземпляров класса и запишите их в массив users.
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

const valera = new Person('Valera', 'Ivanov', 21);
console.log(valera.age);
console.log(valera.sayHi());

class User extends Person{
    constructor(firstName, lastName, age, gender, signUpDate = 0, id){
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

const petya = new User();
console.log(petya.signUpDate);
console.log(petya.sayHi());

var user1, user2, user3;

const users = [
    user1 = new User('Valera', 'Ivanov', 21, 'Male', (new Date()), 1),
    user2 = new User('Petya','Sidorov', 22, 'Male', (new Date()), 2),
    user3 = new User('Vova', 'Petrov', 23, 'Male', (new Date()), 3)
];

console.log(users[2].signUpDate);
console.log(users[0].sayHi());