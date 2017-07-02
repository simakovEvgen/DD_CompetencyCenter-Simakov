/*
* Class Work
*
* ### Задача 3
*
* Модифицируйте код предыдущей задачи. Добавьте на странцу три кнопки: сбросить счет (reset), start и stop,
* которые предоставя пользователю останавлтвать/возобновлять работу таймера и сбрасывать отсчитанное время.
*/

var Timer = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
            interval: "",
            stopDoubleClick: false
        }
    },

    counterTick: function(){
        this.setState({
            counter: ++this.state.counter
        })
    },

    counterStart: function() {
        if(!this.state.stopDoubleClick) {
            this.setState({interval: setInterval(this.counterTick, 1000), stopDoubleClick: true})
        }
    },

    counterReset: function() {
        this.setState({
            counter: 0,
            stopDoubleClick: false
        });
        clearInterval(this.state.interval)
    },

    counterStop: function() {
        clearInterval(this.state.interval)
        this.setState({
            stopDoubleClick: false
        });
    },

    render: function() {
        return <div>
                    <h1>Timer</h1>
                    <h1>{this.state.counter}</h1>
                    <input type="button" value="start" onClick={this.counterStart}/>
                    <input type="button" value="reset" onClick={this.counterReset}/>
                    <input type="button" value="stop" onClick={this.counterStop}/>
               </div>
    }
});

ReactDOM.render(
    <Timer/>,
    document.getElementById('root')
);