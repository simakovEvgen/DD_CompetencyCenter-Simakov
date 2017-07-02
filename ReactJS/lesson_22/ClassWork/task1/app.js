/*
* Class Work
*
* ### Задача 1
*
* Дано следующий объект:
* ```
* let options = {
*   title: "Menu",
*   width: 100,
*   height: 200
* };
* ```
* Используя деструктуризацию, присвойте свойства объекта options переменным с соответствующими именами и выведите их на экран.
*/

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {
    title: item1,
    width: item2,
    height: item3
} = options;

var Destr = React.createClass({
    render: function() {
        return (
            <div>
                <p>Tittle is : {item1}</p>
                <p>Width is : {item2}</p>
                <p>Height is : {item3}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Destr/>,
    document.getElementById('root')
);