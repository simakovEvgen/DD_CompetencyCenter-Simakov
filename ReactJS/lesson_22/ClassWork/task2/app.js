/*
* Class Work
*
* ### Задача 2
*
* Используя Promise, асинхронно загрузите на страницу файл image.jpg, находящийся в папке Classwork рядом с файлом с задачами.
*/



var GetImage = React.createClass({

    getInitialState: function() {
        return {
            src: "",
            get: 'image.jpg'
        }
    },

    getImage: function() {
        let url = this.state.get;
        return new Promise(function(resolve, reject)
        {
            var img = new Image();
            img.onload = function()
            {
                //в случае успешной загрузки изображения, результат "обещания" будет url этого изображения
                return resolve(url);
            }
            img.onerror = function()
            {
                //в случае не успешной загрузки изображения, результат "обещания" будет Error
                return reject(alert("Error"));
            }
            img.src = url;
        }).then(
            this.setState({
                src: url
            })
        );
    },

    render: function() {
        return (
        <div>
            <button onClick={this.getImage}>Get Image</button>
            <img src={this.state.src} alt=""/>
        </div>
        )
    }
});

ReactDOM.render(
    <GetImage/>,
    document.getElementById("root")
);