/*
* Home Work
*
* ### Задача 1
*
* Создайте класс Person со слеюующими свойствами:
* Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”),
* lastName(значение по умолчанию – “Doe”), age(по умолчанию, если свойство не указано, то 0)
* и gender(по умолчанию – “Male”). Значения записываются в this.firstName, this.lastName, this.age
* и this.gender соответственно.
* Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
* Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.
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
