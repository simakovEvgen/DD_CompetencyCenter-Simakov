/*
* Class Work
*
* ### Задача 3
*
* Используя синтаксис ES6, создайте React компонент,
* содержащий кнопку и выводящий на экран при клике по кнопке свои свойства(props) в виде списка.
*/


class Element extends React.Component {

    constructor(props){
        super(props);
        this.state = {show: false};
        this.showFunc = this.showFunc.bind(this)
    }

    showFunc(event){
        this.setState({show: true})
    }

    render(){
        if (this.state.show){
            let propss = this.props;
            let arr = [];
            for(let key in propss){
                arr.push(propss[key]);
            }
            return (
                <ul>
                    {
                        arr.map(function(el, i) {
                            return <li key={i}>{el}</li>
                        })
                    }
                </ul>
            )
        }
        else {
            return <button onClick={this.showFunc}>Click Me!</button>

        }
    }
}

ReactDOM.render(
    <Element name="Vova" gender="Male" age="19"/>,
    document.getElementById("root")
);